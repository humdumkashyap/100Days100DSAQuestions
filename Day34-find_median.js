// Day 34:
// Given an array arr[] of N integers, calculate the median.

// NOTE: Return the floor value of the median.

// Example 1:

// Input: N = 5
// arr[] = 90 100 78 89 67
// Output: 89
// Explanation: After sorting the array
// middle element is the median

// Example 2:

// Input: N = 4
// arr[] = 56 67 30 79
// Output: 61
// Explanation: In case of even number of
// elements, average of two middle elements
// is the median.

// Your Task:
// You don't need to read or print anything. Your task is to complete the function find_median() which takes the array as input parameter and return the floor value of the median.

function find_median(arr) {
  arr.sort((a, b) => a - b);
  let N = arr.length;
  let mid = Math.floor(N / 2);
  if (N % 2 == 0) {
    return Math.floor((arr[mid - 1] + arr[mid]) / 2);
  } else {
    return arr[Math.floor(N / 2)];
  }
}

let arr = [90, 100, 78, 89, 67];
// let arr=[56,67,30,79]
// find_median(arr)
console.log(find_median(arr));
