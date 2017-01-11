/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
  var deepEquals = function(obj1, obj2){
    var isEqual = true;
    for (var i = 0; i < Object.keys(obj1).length; i++) {
      if (typeof obj1[Object.keys(obj1)[i]] === 'object' && typeof obj2[Object.keys(obj1)[i]] === 'object') {
        return isEqual = isEqual && deepEquals(obj1[Object.keys(obj1)[i]],obj2[Object.keys(obj1)[i]]);
      }else{
        if (obj1[Object.keys(obj1)[i]] !== obj2[Object.keys(obj1)[i]]) {
          isEqual = false;
          break;
        }
      }
    }
    return isEqual;
  }

    //return JSON.stringify(obj1) === JSON.stringify(obj2)
