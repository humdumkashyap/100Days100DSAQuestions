// Given a sequence of strings, the task is to find out the second most repeated (or frequent) string in the given sequence.

// Note: No two strings are the second most repeated, there will be always a single string.

// Example 1:

// Input:
// N = 6
// arr[] = {aaa, bbb, ccc, bbb, aaa, aaa}
// Output: bbb

function secFrequent(arr, n) {
  let charCount = {};
  for (let i = 0; i < n; i++) {
    if (charCount[arr[i]]) {
      charCount[arr[i]]++;
    } else {
      charCount[arr[i]] = 1;
    }
  }

  let max = 0,
    seconfMaxCount = 0,
    secondMaxStr = "";

  for (let char in charCount) {
    if (charCount[char] > max) {
      seconfMaxCount = max;
      max = charCount[char];
      secondMaxStr = char;
    } else if (charCount[char] < max && charCount[char] > seconfMaxCount) {
      seconfMaxCount = charCount[char];
      secondMaxStr = char;
    }
  }

  return secondMaxStr;
}

let arr = ["aaa", "bbb", "ccc", "bbb", "aaa", "aaa"];
console.log(secFrequent(arr, 6));
console.log(secFrequent(["aaa", "bbb", "ccc", "bbb", "aaa", "aaa"], 6));
console.log(secFrequent(["aaa", "bbb", "ccc", "bbb", "aaa", "aaa", "ccc"], 7));
console.log(
  secFrequent(["aaa", "bbb", "ccc", "bbb", "aaa", "aaa", "ccc", "bbb"], 8)
);
console.log(
  secFrequent(
    ["aaa", "bbb", "ccc", "bbb", "aaa", "aaa", "ccc", "bbb", "bbb"],
    9
  )
);
