/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
Calculate the sum of the digits of the number 2^1000?
Hint the answer is 1366.
*/

var powerOfTwo = function(num){
<<<<<<< HEAD
	var res  = Math.pow(2,num).toString().split('e')[0].split('.').join('').split('')
	return res.reduce(function(acc,elm,ind){
		return acc+=Number(elm)
	},0);

	//for 2 ^ 1000 must seperate the exp and then multiple all small exp
=======

>>>>>>> a5c71016976e98c9702b3634f9a79bf8902739cd
}