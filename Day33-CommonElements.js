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

  let Narr1 = arr1.filter((it, i, ar) => ar.indexOf(it) === i);
  let Narr2 = arr2.filter((it, i, ar) => ar.indexOf(it) === i);
  let Narr3 = arr2.filter((it, i, ar) => ar.indexOf(it) === i);
  console.log(Narr1, "Narr1");
  console.log(Narr2, "Narr2");
  console.log(Narr3, "Narr3");
  function Elements(arr) {
    for (let i in arr) {
      if (newArr[arr[i]]) {
        newArr[arr[i]]++;
      } else {
        newArr[arr[i]] = 1;
      }
    }
  }

  Elements(Narr1);
  Elements(Narr2);
  Elements(Narr3);

  console.log(newArr);
  for (let j in newArr) {
    if (newArr[j] >= 3) {
      finalArr.push(+j);
    }
  }

  if (finalArr.length > 0) {
    return finalArr;
  } else {
    return -1;
  }
}
let arr1 = [-69, -68, -39, -25, -6, 18, 33, 39, 42, 46, 52, 55, 55, 64, 71];
let arr2 = [
  -97, -92, -90, -90, -87, -85, -82, -77, -77, -77, -75, -71, -67, -64, -60,
  -59, -58, -52, -49, -48, -48, -47, -47, -46, -41, -36, -35, -29, -28, -26,
  -25, -20, -19, -14, -13, -13, -11, -10, -6, -4, 2, 3, 9, 12, 15, 17, 20, 22,
  23, 24, 27, 29, 36, 36, 37, 38, 39, 42, 45, 47, 48, 48, 50, 52, 52, 53, 57,
  59, 60, 63, 63, 64, 64, 65, 68, 70, 71, 76, 76, 77, 83, 83, 84, 85, 86, 89,
  97, 97,
];

let arr3 = [
  -97, -92, -90, -90, -87, -85, -82, -77, -77, -77, -75, -71, -67, -64, -60,
  -59, -58, -52, -49, -48, -48, -47, -47, -46, -41, -36, -35, -29, -28, -26,
  -25, -20, -19, -14, -13, -13, -11, -10, -6, -4, 2, 3, 9, 12, 15, 17, 20, 22,
  23, 24, 27, 29, 36, 36, 37, 38, 39, 42, 45, 47, 48, 48, 50, 52, 52, 53, 57,
  59, 60, 63, 63, 64, 64, 65, 68, 70, 71, 76, 76, 77, 83, 83, 84, 85, 86, 89,
  97, 97,
];

let n1 = arr1.length;
let n2 = arr2.length;
let n3 = arr3.length;

console.log(commonElements(arr1, arr2, arr3, n1, n2, n3));
