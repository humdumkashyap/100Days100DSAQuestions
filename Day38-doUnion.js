// Given two arrays a[] and b[] of size n and m respectively. The task is to find the number of elements in the union between these two arrays.

// Union of the two arrays can be defined as the set containing distinct elements from both the arrays. If there are repetitions, then only one occurrence of element should be printed in the union.

// Note : Elements are not necessarily distinct.

// Example 1:

// Input:
// 5 3
// 1 2 3 4 5
// 1 2 3
// Output:
// 5
// Explanation:
// 1, 2, 3, 4 and 5 are the
// elements which comes in the union set
// of both arrays. So count is 5.
// Example 2:

// Input:
// 6 2
// 85 25 1 32 54 6
// 85 2
// Output:
// 7
// Explanation:
// 85, 25, 1, 32, 54, 6, and
// 2 are the elements which comes in the
// union set of both arrays. So count is 7.
// Your Task:
// Complete doUnion function that takes a, n, b, m as parameters and returns the count of union elements of the two arrays. The printing is done by the driver code.

// Constraints:
// 1 ≤ n, m ≤ 105
// 0 ≤ a[i], b[i] < 105

// Expected Time Complexity : O(n+m)
// Expected Auxilliary Space : O(n+m)

// Link: https://www.geeksforgeeks.org/problems/union-of-two-arrays3538/1
function doUnion(arr1, n, arr2, m) {
  newArr = {};
  let count = 0;

  function unique(arr) {
    for (let i in arr) {
      if (!newArr[arr[i]]) {
        newArr[arr[i]] = 1;
        count++;
      }
    }
  }
  unique(arr1);
  unique(arr2);
  return count;
}
let arr1 = [85, 25, 1, 32, 54, 6];
n = arr1.length;
arr2 = [85, 2];
m = arr2.length;

console.log(doUnion(arr1, n, arr2, m));
