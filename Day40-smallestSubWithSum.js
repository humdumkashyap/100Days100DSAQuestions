// Given an array of integers (A[])  and a number x, find the smallest subarray with sum greater than the given value. If such a subarray do not exist return 0 in that case.

// Example 1:

// Input:
// A[] = {1, 4, 45, 6, 0, 19}
// x  =  51
// Output: 3
// Explanation:
// Minimum length subarray is
// {4, 45, 6}

// Example 2:
// Input:
// A[] = {1, 10, 5, 2, 7}
//    x  = 9
// Output: 1
// Explanation:
// Minimum length subarray is {10}

// Your Task:
// You don't need to read input or print anything. Your task is to complete the function smallestSubWithSum() which takes the array A[], its size N and an integer X as inputs and returns the required ouput.

// Link: https://www.geeksforgeeks.org/problems/smallest-subarray-with-sum-greater-than-x5651/1

function smallestSubWithSum(arr, n, x) {
  let minLength = Infinity;
  let currentSum = 0;
  let j = 0;

  for (let i = 0; i < n; i++) {
    currentSum += arr[i];

    while (currentSum > x) {
      minLength = Math.min(minLength, i - j + 1);
      currentSum -= arr[j];
      j++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

let arr = [1, 4, 45, 6, 0, 19];
let n = arr.length;
let x = 51;

console.log(smallestSubWithSum(arr, n, x));
