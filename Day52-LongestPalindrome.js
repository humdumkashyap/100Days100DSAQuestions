// Given a string s, return the longest
// palindromic

// substring
//  in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

let arr = [];
let substr;
let substringvalue;

for (let i = 0; i <= s.length; i++) {
  for (let j = i + 1; j <= s.length; j++) {
    substringvalue = s.substring(i, j);
    if (!arr.includes(substringvalue)) {
      arr.push(s.substring(i, j));
    }
  }
}
arr.sort((a, b) => b.length - a.length);
console.log(arr);
for (let i = 0; i < arr.length; i++) {
  substr = arr[i].split("").reverse().join("");
  console.log(substr, "substr");
  if (arr[i] == substr) {
    return substr;
  }
}
