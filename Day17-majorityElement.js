// 🚀🚀🚀Day-17🚀🚀🚀

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109

// let arr=[2,2,1,1,2,2]

let arr = [3, 2, 2, 2, 2, 2, 2, 2, 3];

function majorityElement(arr) {
  let newArr = {};
  for (x in arr) {
    if (newArr[arr[x]]) {
      newArr[arr[x]]++;
    } else {
      newArr[arr[x]] = 1;
    }
  }
  console.log(newArr);
  let max = 0;
  let index = 0;

  for (x in newArr) {
    if (newArr[x] > max) {
      index = x;
      max = newArr[x];
    }
  }

  return index;
}

console.log(majorityElement(arr));
