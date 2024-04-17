// 🚀🚀🚀  Day 1 🚀🚀🚀

//  A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

//  Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Link: https://leetcode.com/problems/valid-palindrome/

let str1 = "A man, a plan, a canal: Panama";
//let str1 ="race a car"
// let str1 = "";
var isPalindrome = function (s) {
  let plainArray = s
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase()
    .split("");
  let newstr = plainArray.join("");
  let reverseStr = plainArray.reverse().join("");

  if (newstr == reverseStr || newstr == "") {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
};

isPalindrome(str1);
