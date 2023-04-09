const reverseString = function(string) {
    let reverseOutput = '';
    for (i = string.length - 1; i >= 0; i--) {
      reverseOutput += string.charAt(i);
    }
      return reverseOutput;
    };
reverseString('');

// Do not edit below this line
module.exports = reverseString;
