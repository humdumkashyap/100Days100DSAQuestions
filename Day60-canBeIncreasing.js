function canBeIncreasing(nums) {
  let maxnum = Math.max.apply(0, nums);
  console.log(nums.indexOf(maxnum));
  if (nums.indexOf(maxnum) > nums.length - 1) {
    return true;
  } else {
    return false;
  }
}
let nums = [1, 2, 10, 5, 7];
console.log(canBeIncreasing(nums));
