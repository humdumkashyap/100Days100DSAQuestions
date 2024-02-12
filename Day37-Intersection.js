//Intersection of two arrays
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

function intersection(arr1, arr2) {
  let a1 = new Set(arr1);
  let a2 = new Set(arr2);
  let newArr = {};
  let finalArr = [];
  function unique(arr) {
    for (let i of arr) {
      if (!newArr[i]) {
        newArr[i] = 1;
      } else {
        newArr[i]++;
        finalArr.push(i);
      }
    }
  }
  unique(a1);
  unique(a2);
  return finalArr;
}

let arr1 = [4, 9, 5];
n = arr1.length;
arr2 = [9, 4, 9, 8, 4];
m = arr2.length;

console.log(intersection(arr1, arr2));
