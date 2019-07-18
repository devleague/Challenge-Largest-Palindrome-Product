/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits) {
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  // do your work here
  // Check if a number is palidrome
  function isPalindrome(number) {
    number.toString().split("");
    // Split the number at the halfway mark
    for (let i = 0; i < number.length / 2; i++) {
      if (number[i] !== number[number.length - 1 - i]) {
        return false;
      }
    }

    return true;
  }

  // Find all products depending on the digits

  return {
    factor_0: factor_0,
    factor_1: factor_1,
    palindromeNumber: palindromeNumber
  };
};
