// Write a function that returns the second largest distinct number in an array.
// Input: arr = [0, 3, 5, 2, 7, 9] → Output: 7
// Input: arr = [4, 4, 4, 4] → Output: No second largest found
// Input: arr = [5] → Output: Array should have at least two numbers
// Input: arr = [10, 20] → Output: 10

function SecondLargestNumber(arr) {
  let maxNum = -Infinity;
  let secNum = -Infinity;

  if (arr.length < 2) {
    return "Array should have at least two numbers";
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      secNum = maxNum;
      maxNum = arr[i];
    } else if (arr[i] < maxNum && arr[i] > secNum) {
      secNum = arr[i];
    }
  }

  if (secNum == -Infinity) {
    return "No second largest found";
  }

  return secNum;
}

console.log(SecondLargestNumber([0, 3, 5, 2, 7, 9]));
// console.log(SecondLargestNumber([0, 3, 5, 2, 7, 6]));
// console.log(SecondLargestNumber([4, 4, 4, 3]));
// console.log(SecondLargestNumber([5]));
// console.log(SecondLargestNumber([10, 20]));
