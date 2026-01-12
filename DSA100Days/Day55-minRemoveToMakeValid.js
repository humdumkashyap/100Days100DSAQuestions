// 💪💪💪Day-55💪💪💪

// Given a string s of '(' , ')' and lowercase English characters.

// Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

// Formally, a parentheses string is valid if and only if:

// It is the empty string, contains only lowercase characters, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.

// Example 1:

// Input: s = "lee(t(c)o)de)"
// Output: "lee(t(c)o)de"
// Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
// Example 2:

// Input: s = "a)b(c)d"
// Output: "ab(c)d"
// Example 3:

// Input: s = "))(("
// Output: ""
// Explanation: An empty string is also valid.

// Link: https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/description/

// var minRemoveToMakeValid = function (s) {
//   const stack = [];
//   let ansStr = s.split("");
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] == "(") {
//       stack.push(i);
//     } else if (s[i] == ")") {
//       if (stack.length != 0) {
//         stack.pop();
//       } else {
//         ansStr[i] = "";
//       }
//     }
//   }
//   for (let i = 0; i < stack.length; i++) {
//     let ind = stack[i];
//     ansStr[ind] = "";
//   }
//   return ansStr.join("");
// };

var minRemoveToMakeValid = function (s) {
  let finalStr = "";
  let count = 0;

  for (let char of s) {
    if (char == "(") {
      count++;
    } else if (char == ")") {
      if (count == 0) {
        continue;
      } else {
        count--;
      }
    }
    finalStr += char;
  }

  let str = "";
  for (let i = finalStr.length - 1; i >= 0; i--) {
    let char = finalStr[i];
    if (char === "(" && count > 0) {
      count--;
      continue;
    }
    str = char + str;
  }

  return str;
};

console.log(minRemoveToMakeValid("lee(t(c)o)de)"));
console.log(minRemoveToMakeValid("))(("));
