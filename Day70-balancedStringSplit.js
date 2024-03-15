// 💪💪💪Day-70💪💪💪

// 1221. Split a String in Balanced Strings

// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it into some number of substrings such that:

// Each substring is balanced.
// Return the maximum number of balanced strings you can obtain.

// Example 1:

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
// Example 2:

// Input: s = "RLRRRLLRLL"
// Output: 2
// Explanation: s can be split into "RL", "RRRLLRLL", each substring contains same number of 'L' and 'R'.
// Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the 2nd and 5th substrings are not balanced.
// Example 3:

// Input: s = "LLLLRRRR"
// Output: 1
// Explanation: s can be split into "LLLLRRRR".

// Link: https://leetcode.com/problems/split-a-string-in-balanced-strings/description/

var balancedStringSplit = function (s) {
  let count = 0;
  let pairCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "R") {
      count++;
    }
    if (s[i] == "L") {
      count--;
    }
    if (count == 0) {
      pairCount++;
    }
  }

  return pairCount;
};

let s = "LLLLRRRR";
console.log(balancedStringSplit(s));
