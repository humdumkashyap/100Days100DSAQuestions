function containsDuplicate(arr) {
  let arr1 = {};
  let finalOutput = false;
  for (i in arr) {
    if (arr1[arr[i]]) {
      finalOutput = true;
    } else {
      arr1[arr[i]] = 1;
    }
  }
  if (finalOutput == true) {
    return true;
  } else {
    return false;
  }
}

let nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums));
