/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
<<<<<<< HEAD
<<<<<<< HEAD
 */
=======
*/
>>>>>>> 489641d63aec9a4741e9d52eb49286a5629cb485
=======
*/
>>>>>>> ec1197ded368e7aad2cc2c29d5059a3905f42645


/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
<<<<<<< HEAD
<<<<<<< HEAD
 */

 Array.prototype.isSubsetOf = function (arr) {
 	for (var i = 0; i < arr.length; i++) {
 		arr[i] = JSON.stringify(arr[i]);
 	}
 	for (var i = 0; i < this.length; i++) {
 		if (arr.indexOf(JSON.stringify(this[i])) === -1) {
 			return false
 		}
 	}
 	return true;
 }
=======
=======
>>>>>>> ec1197ded368e7aad2cc2c29d5059a3905f42645
*/

Array.prototype.isSubsetOf = function (arr) {

<<<<<<< HEAD
}
>>>>>>> 489641d63aec9a4741e9d52eb49286a5629cb485
=======
}
>>>>>>> ec1197ded368e7aad2cc2c29d5059a3905f42645
