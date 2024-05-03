/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reverseStr = cleanStr.split("").reverse().join("");
  if (reverseStr === cleanStr) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindrome;
