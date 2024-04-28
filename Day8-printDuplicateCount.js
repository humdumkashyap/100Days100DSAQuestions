// Given a string S, the task is to print all the duplicate characters with their occurrences in the given string .

// Example:

// Input: S = “geeksforgeeks”
// Output:

// e, count = 4
// g, count = 2
// k, count = 2
// s, count = 2

/**********************/
//let str = "geeksforgeeks";

let str = ["aaa", "bbb", "ccc", "bbb", "aaa", "aaa"];
function printDuplicateCount(str) {
  let charCount = {};
  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]]) {
      charCount[str[i]]++;
    } else {
      charCount[str[i]] = 1;
    }
  }

  for (let char in charCount) {
    if (charCount[char] > 1) {
      console.log(char + ", count = " + charCount[char]);
    }
  }
}

console.log(printDuplicateCount(str));
console.log(printDuplicateCount("geeksforgeeks"));
console.log(printDuplicateCount("hello"));
