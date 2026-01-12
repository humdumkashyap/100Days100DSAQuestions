// 🚀🚀🚀Day-48🚀🚀🚀

// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.

// Link: https://leetcode.com/problems/longest-repeating-character-replacement/description/

var lengthOfLongestSubstring = function (s) {
  let arr = [];
  let count = 0;
  let maxCount = 0;

  for (i of s) {
    if (arr.includes(i)) {
      arr.splice(0, arr.length, i);
      console.log(arr, "delete");
    } else {
      arr.push(i);
      count++;
      maxCount = Math.max(maxCount, count);

      console.log(arr, count);
    }
  }

  return maxCount;

  //   let obj={}
  // let count=0
  // for(i in s){
  //     if(!obj[s[i]]){
  //          obj[s[i]]=i
  //          count++
  //     }else{

  //     }

  // }

  // return count
};
let s = "dvdf";
console.log(lengthOfLongestSubstring(s));
