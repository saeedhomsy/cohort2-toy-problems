/*
 * Write a function that accepts a 2-dimensional array (array of arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Example:
    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);
    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
    */

    var spiralTraversal = function(matrix){
    	var resultArr = [];
    	for (var i = 0; i < matrix[0].length; i++) {
    		resultArr.push(matrix[0][i]);
    	}
    	for (var i = 1; i < matrix.length; i++) {
    		resultArr.push(matrix[i][matrix[i].length-1])
    	}
    	for (var i = matrix[matrix.length-1].length - 2; i >= 0; i--) {
    		resultArr.push(matrix[matrix.length-1][i])
    	}
    	for (var i = matrix.length - 2; i >= 1; i--) {
    		resultArr.push(matrix[i][0])
    	}
    	for (var i = 1; i < matrix[1].length-1; i++) {
    		resultArr.push(matrix[1][i])	
    	}
    	return resultArr
    };