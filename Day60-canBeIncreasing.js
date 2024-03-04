function canBeIncreasing(nums) {
  for (let i = 0; i < nums.length; i++) {
    let temp = [...nums];
    temp.splice(i, 1);
    if (isIncreasing(temp)) {
      return true;
    }
  }
  return false;
}

function isIncreasing(nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(canBeIncreasing([1, 2, 10, 5, 7])); // Outputs: true
console.log(canBeIncreasing([2, 3, 1, 2])); // Outputs: false
console.log(canBeIncreasing([1, 1, 1])); // Outputs: false
