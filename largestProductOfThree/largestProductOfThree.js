/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

 var largestProductOfThree = function(array,n=3) {debugger
 	var result = 1
 	for (var i = 0; i < n; i++) {
 		result *= array.splice(array.indexOf(Math.max(...array)),1)[0]
 	}
 	return result
 }




