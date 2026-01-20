// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.
// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
 

function reverseString(str) {
  let fullLen = str.length;
  let len = Math.trunc(str.length / 2);
  for (let i = 0; i < len; i++) {
    [str[i], str[fullLen - 1 - i]] = [str[fullLen - 1 - i], str[i]];
  }
  return str;
}

console.log(reverseString(["h", "e", "l", "l", "o"])); //["o","l","l","e","h"]
