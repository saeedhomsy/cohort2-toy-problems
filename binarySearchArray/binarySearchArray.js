/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * 
 * console.log(index); // 4
 */

 var binarySearch = function (array, target) {
 	var lInd = 0;
 	var hInd = array.length-1;
 	var midInd = Math.floor((lInd + hInd) / 2);
 	while(array[midInd]!==target){
 		if (target > array[midInd]) {
 			lInd = midInd;
 			if (lInd === hInd-1) {
 				midInd = Math.ceil((lInd + hInd) / 2);	
 			}else{
 				midInd = Math.floor((lInd + hInd) / 2);
 			}
 		}else if(target < array[midInd]){
 			hInd = midInd;
 			midInd = Math.floor((lInd + hInd) / 2);
 		}
 	}
 	return midInd
 };

