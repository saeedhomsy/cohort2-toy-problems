/*
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:
13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/


<<<<<<< HEAD
var longestCollatzSeq = function(n){
	var arr = [];
	while(n>1){
		if (n===1) {
			arr.push(1)
		}else if (n%2===0) {
			n = n / 2

			arr.push(n);
		}else{
			n = 3*n+1
			arr.push(n);
		}
	}
	return arr
}

var newfunc = function(){
	var max = 0
	var num = 0
	for (var i = 1000000; i >= 1; i--) {
		if (longestCollatzSeq(i).length>max) {
			max = longestCollatzSeq(i).length
			num = i;
		}
	}
	return num
=======
var longestCollatzSeq = function(){

>>>>>>> bb8517a2725233bbc3b562c76a45f0fdc05b163d
}