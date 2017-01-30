/*
 * Write Compose and Pipe functions.
 * 
 * Step 1: Implement the function Compose: 
 *
 * Compose should return a function that is the composition of a list of
 * functions.
 *
 * Each function is called on the return value of the function that follows.
 *
 * You can view Compose as moving RIGTH to LEFT through its arguments.
 *
 * Compose Example:
   var greet = function(name){ return 'hello ' + name;}
   var exclaim = function(statement) { return statement.toUpperCase() + '!';}
   var welcome = compose(exclaim, greet);
   welcome('phillip'); // 'hello PHILLIP!'

 *
 * Step 2: Implement the function Pipe:
 *
 * Pipe composes a series of functions and returns the resulting function.
 * 
 * Each function is called on the return value of the preceding function.
 *
 * You can view Pipe as moving LEFT to RIGHT through its arguments.
 * 
 * Pipe Example:
  var add2 = function(number){ return number + 2; }
  var multiplyBy3 = function(number){ return number * 3; }
  var addAndMultiply = pipe(add2, multiplyBy3);
  addAndMultiply(5);//should be 21
  var addAndMultiplyTwice = pipe(add2, multiplyBy3, multiplyBy3);
  addAndMultiplyTwice(5); //should be 63
  */

  'use strict';
  var add2 = function(number){ return number + 2; }
  var multiplyBy3 = function(number){ return number * 3; }

  var pipe = function(func1,func2){

    //FOR TWO ARGS (I'm try with more put didn't git right anserws)
    return function(x){
      var tt = args
      return func2(func1(x))
    }
  };

  var addAndMultiplyTwice = pipe(add2, multiplyBy3, multiplyBy3);

//==============================================================================

var greet = function(name){ return 'hello ' + name;}
var exclaim = function(statement) { return statement.toUpperCase() + '!';}

var compose = function(){

  //FOR TWO ARGS (I'm try with more put didn't git right anserws)

  var args = Array.prototype.slice.call(arguments);
  return function(x){
    var tt = args
    return args[0](args[1](x))
  }
};


var welcome = compose(greet, exclaim);