// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

function moveZeroes(arr) {
  let count = 0;
  if (!arr.includes(0)) {
    return arr;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == 0) {
        count++;
        arr.splice(i, 1);
        i--;
      } else {
        continue;
      }
    }
  }
  let j = count;
  while (j > 0) {
    arr.push(0);
    j--;
    count--;
  }
  return arr;
}
let arr = [3, 0, 0, 0, 2, 1];
console.log(moveZeroes(arr));
