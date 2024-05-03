/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const cleanStr = (str) => str.replace(/\s/g, "").toLowerCase(); // remove spaces from the string
  const sortedStr = (str) => cleanStr(str).split("").sort().join(""); // splits into array, sort alphabetically, join back
  return sortedStr(str1) === sortedStr(str2); // return output of === (true/false)
}

module.exports = isAnagram;
