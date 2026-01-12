// 🚀🚀🚀Day-14 🚀🚀🚀

// The power of the string is the maximum length of a non-empty substring that contains only one unique character.

// Given a string s, return the power of s.

 

// Example 1:

// Input: s = "leetcode"
// Output: 2
// Explanation: The substring "ee" is of length 2 with the character 'e' only.
// Example 2:

// Input: s = "abbcccddddeeeeedcba"
// Output: 5
// Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
 

// Constraints:

// 1 <= s.length <= 500
// s consists of only lowercase English letters.



function consecutiveCharacters(s) {
  if (!s || s.length === 0) {
    return 0;
  }

  let maxPower = 1;

  for (let i = 0; i < s.length; i++) {
    let currentPower = 1;

    for (let j = i + 1; j < s.length && s[j] === s[i]; j++) {
      currentPower++;
    }

    maxPower = Math.max(maxPower, currentPower);
  }

  return maxPower;
}

const str = "abbcccddddeeeeedcba";
console.log(consecutiveCharacters(str));
