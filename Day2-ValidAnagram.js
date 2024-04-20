// 🚀🚀🚀 Revision Day-2🚀🚀🚀

//  An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once .

//  Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Leetcode: https://leetcode.com/problems/valid-anagram/

let s = "anagram";
let t = "nagaram";
var isAnagram = function (s, t) {
  let str1 = s.toLowerCase().split("").sort().join("");
  let str2 = t.toLowerCase().split("").sort().join("");

  if (str1 == str2) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
};

isAnagram(s, t);
console.log(isAnagram(s, t));
