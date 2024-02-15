// 🚀🚀🚀Day-42🚀🚀🚀

// Given two arrays: a1[0..n-1] of size n and a2[0..m-1] of size m, where both arrays may contain duplicate elements. The task is to determine whether array a2 is a subset of array a1. It's important to note that both arrays can be sorted or unsorted. Additionally, each occurrence of a duplicate element within an array is considered as a separate element of the set.

// Example 1:

// Input:
// a1[] = {11, 7, 1, 13, 21, 3, 7, 3}
// a2[] = {11, 3, 7, 1, 7}
// Output:
// Yes
// Explanation:
// a2[] is a subset of a1[]

// Example 2:

// Input:
// a1[] = {1, 2, 3, 4, 4, 5, 6}
// a2[] = {1, 2, 4}
// Output:
// Yes
// Explanation:
// a2[] is a subset of a1[]

// Example 3:

// Input:
// a1[] = {10, 5, 2, 23, 19}
// a2[] = {19, 5, 3}
// Output:
// No
// Explanation:
// a2[] is not a subset of a1[]

// Your Task:
// You don't need to read input or print anything. Your task is to complete the function isSubset() which takes the array a1[], a2[], its size n and m as inputs and return "Yes" if arr2 is subset of arr1 else return "No" if arr2 is not subset of arr1.

//  Link: https://www.geeksforgeeks.org/problems/array-subset-of-another-array2317/1

function isSubset(a1, a2, n, m) {
  a1.sort((a, b) => a - b);
  a2.sort((a, b) => a - b);
  let present = "No";
  let count = 0;
  for (let i = 0; i < m; i++) {
    if (a1.includes(a2[i])) {
      a1.splice(i, 1, "a");
      count++;
    } else {
      break;
    }
  }

  if (count == m) {
    return "Yes";
  } else {
    return "No";
  }
}
let a1 = [11, 1, 13, 21, 3, 7];
let a2 = [11, 3, 7, 7, 1];
let n = a1.length;
let m = a2.length;
console.log(isSubset(a1, a2, n, m));
