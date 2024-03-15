// 💪💪💪Day-71💪💪💪
// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.

// Example 1:

// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.
// Example 2:

// Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
// Output: false
// Example 3:

// Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
// Output: true

// Link:https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/description/

function arrayStringsAreEqual(word1, word2) {
  //sol-1
  let str1;
  let str2;

  function concat(str) {
    let concatstr = "";
    for (let i = 0; i < str.length; i++) {
      concatstr += str[i];
    }
    return concatstr;
  }

  str1 = concat(word1);
  str2 = concat(word2);

  return str1 == str2;

  //sol-2
  // let str1 = word1.join("");
  // let str2 = word2.join("");
  // console.log(str1, str2);
  // return str1 === str2;
}

let word1 = ["abc", "d", "defg"];
let word2 = ["abcddefg"];
console.log(arrayStringsAreEqual(word1, word2));
