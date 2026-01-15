// Write a function that returns the largest number in an array.
// Input: arr = [2, -6, 4, 8, 1, -9]
// Output:8

function largestNumber(arr) {
  let maxNumb = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNumb) {
      maxNumb = arr[i];
    }
  }
  return maxNumb;
}
// console.log(largestNumber([2, -6, 4, 8, 1, -9]));
// console.log(largestNumber([2, -6, 4, 8, 11, 90]));
