// Given three arrays sorted in increasing order. Find the elements that are common in all three arrays.
// Note: can you take care of the duplicates without using any additional Data Structure?

// Example 1:

// Input:
// n1 = 6; A = {1, 5, 10, 20, 40, 80}
// n2 = 5; B = {6, 7, 20, 80, 100}
// n3 = 8; C = {3, 4, 15, 20, 30, 70, 80, 120}
// Output: 20 80
// Explanation: 20 and 80 are the only
// common elements in A, B and C.

// Your Task:
// You don't need to read input or print anything. Your task is to complete the function commonElements() which take the 3 arrays A[], B[], C[] and their respective sizes n1, n2 and n3 as inputs and returns an array containing the common element present in all the 3 arrays in sorted order.
// If there are no such elements return an empty array. In this case the output will be printed as -1.

// Expected Time Complexity: O(n1 + n2 + n3)
// Expected Auxiliary Space: O(n1 + n2 + n3)

// Constraints:
// 1 <= n1, n2, n3 <= 10^5
// The array elements can be both positive or negative integers.

function commonElements(arr1, arr2, arr3, n1, n2, n3) {
  let newArr = {};
  let finalArr = [];

  let Narr1 = new Set(arr1);
  let Narr2 = new Set(arr2);
  let Narr3 = new Set(arr3);

  function CheckReapeat(arr) {
    for (let i of arr) {
      if (newArr[i]) {
        newArr[i]++;
      } else {
        newArr[i] = 1;
      }
    }
  }
  CheckReapeat(Narr1);
  CheckReapeat(Narr2);
  CheckReapeat(Narr3);

  for (let j in newArr) {
    if (newArr[j] >= 3) {
      finalArr.push(+j);
    }
  }

  if (finalArr.length > 0) {
    return finalArr.sort((a, b) => a - b);
  } else {
    return finalArr;
  }
}
let arr1 = [
  -95, -94, -94, -94, -90, -89, -85, -82, -81, -79, -74, -70, -70, -69, -68,
  -66, -65, -65, -63, -61, -59, -56, -53, -52, -51, -49, -44, -42, -36, -32,
  -30, -29, -23, -20, -19, -18, -17, -16, -16, -15, -12, -12, -10, -8, -3, 0, 0,
  1, 2, 2, 4, 5, 8, 11, 14, 22, 23, 29, 31, 32, 33, 35, 35, 37, 37, 40, 43, 48,
  50, 54, 55, 57, 59, 60, 60, 64, 66, 68, 69, 71, 73, 73, 73, 76, 77, 78, 79,
  81, 84, 85, 86, 92, 93, 97,
];
let arr2 = [
  -85, -74, -71, -66, -63, -54, -45, -36, -36, -34, -30, -29, -4, 6, 16, 16, 20,
  20, 24, 28, 28, 28, 38, 50, 56, 56, 58, 59, 75, 76, 84, 92,
];

let arr3 = [
  -99, -99, -95, -94, -86, -79, -72, -72, -69, -54, -54, -53, -50, -42, -41,
  -39, -36, -35, -34, -26, -19, -14, -14, -12, -12, -11, -11, -9, -9, -7, -7,
  -4, 5, 5, 6, 13, 17, 18, 23, 25, 27, 34, 37, 37, 38, 47, 48, 55, 60, 69, 69,
  71, 72, 72, 73, 80, 81, 82, 90, 92, 97, 98, 99,
];

let n1 = arr1.length;
let n2 = arr2.length;
let n3 = arr3.length;

console.log(commonElements(arr1, arr2, arr3, n1, n2, n3));
