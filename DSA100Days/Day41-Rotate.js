// Given an array, rotate the array by one position in clock-wise direction.

// Example 1:

// Input:
// N = 5
// A[] = {1, 2, 3, 4, 5}
// Output:
// 5 1 2 3 4

// Example 2:

// Input:
// N = 8
// A[] = {9, 8, 7, 6, 4, 2, 1, 3}
// Output:
// 3 9 8 7 6 4 2 1

// Your Task:
// You don't need to read input or print anything. Your task is to complete the function rotate() which takes the array A[] and its size N as inputs and modify the array in place.
// Link: https://www.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1

function rotate(arr, n) {
  arr.unshift(arr[n - 1]);
  arr.pop(arr[n - 1]);
  return arr;
}
let arr = [1, 2, 3, 4, 5];
let n = arr.length;
console.log(rotate(arr, n));
