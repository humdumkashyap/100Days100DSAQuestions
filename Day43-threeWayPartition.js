// Given an array of size n and a range [a, b]. The task is to partition the array around the range such that array is divided into three parts.
// 1) All elements smaller than a come first.
// 2) All elements in range a to b come next.
// 3) All elements greater than b appear in the end.
// The individual elements of three sets can appear in any order. You are required to return the modified array.

// Note: The generated output is 1 if you modify the given array successfully.

// Example 1:

// Input:
// n = 5
// A[] = {1, 2, 3, 3, 4}
// [a, b] = [1, 2]
// Output: 1
// Explanation: One possible arrangement is:
// {1, 2, 3, 3, 4}. If you return a valid
// arrangement, output will be 1.

// Example 2:

// Input:
// n = 3
// A[] = {1, 4, 3, 6, 2, 1}
// [a, b] = [1, 3]
// Output: 1
// Explanation: One possible arrangement
// is: {1, 3, 2, 1, 4, 6}. If you return a valid
// arrangement, output will be 1.

// Your Task:
// You don't need to read input or print anything. The task is to complete the function threeWayPartition() which takes the array[], a, and b as input parameters and modifies the array in-place according to the given conditions.
//  Link: https://www.geeksforgeeks.org/problems/three-way-partitioning/1

function threeWayPartition(array, a, b) {
  let start = 0;
  let end = array.length - 1;

  for (let i = 0; i <= end; ) {
    if (array[i] < a) {
      [array[i], array[start]] = [array[start], array[i]];
      i++;
      start++;
    } else if (array[i] > b) {
      [array[i], array[end]] = [array[end], array[i]];
      end--;
    } else {
      i++;
    }
  }

  return 1;
}

console.log(threeWayPartition([1, 2, 3, 3, 4], 1, 2)); // Outputs: 1
console.log(threeWayPartition([1, 4, 3, 6, 2, 1], 1, 3)); // Outputs: 1
