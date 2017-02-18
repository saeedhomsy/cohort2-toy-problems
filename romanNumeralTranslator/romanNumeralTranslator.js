
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Example:
 * translateRomanNumeral("XXI") // 21
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Example:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

<<<<<<< HEAD
 var translateRomanNumeral = function(romanNumeral){debugger
 	var DIGIT_VALUES = {
 		I: 1,
 		V: 5,
 		X: 10,
 		L: 50,
 		C: 100,
 		D: 500,
 		M: 1000
 	};
 	var romanArr = romanNumeral.split('');
 	var lastNum = DIGIT_VALUES[romanArr[0]]; 
 	var result = DIGIT_VALUES[romanArr[0]];
 	for (var i = 1; i < romanArr.length; i++) {
 		if (DIGIT_VALUES[romanArr[i]]) {
 			if (lastNum < DIGIT_VALUES[romanArr[i]]) {
 				result = DIGIT_VALUES[romanArr[i]] - result;
 			}else{
 				result +=  DIGIT_VALUES[romanArr[i]];
 			}
 			lastNum = DIGIT_VALUES[romanArr[i]];
 		}else{
 			return null
 		}
 	}
 	return result;
 }
=======
var translateRomanNumeral = function(romanNumeral){
	var DIGIT_VALUES = {
	  I: 1,
	  V: 5,
	  X: 10,
	  L: 50,
	  C: 100,
	  D: 500,
	  M: 1000
	};
}
>>>>>>> ec1197ded368e7aad2cc2c29d5059a3905f42645
