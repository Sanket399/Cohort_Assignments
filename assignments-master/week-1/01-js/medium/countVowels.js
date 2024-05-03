/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  return Array.from(str.toLowerCase()).reduce((count, char) => {
    if ("aeiou".includes(char)) {
      return count + 1;
    }
    return count;
  }, 0);
}

module.exports = countVowels;
