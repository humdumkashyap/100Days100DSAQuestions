function getPairsCount(arr, n, k) {
  let count = 0;
  let i = 0;
  let j = i + 1;
  while (i < arr.length) {
    if (j < arr.length) {
      if (arr[i] + arr[j] == k) {
        console.log(arr[i], arr[j]);
        count++;
      }
      j++;
    } else {
      i++;
      j = i + 1;
    }
  }
  console.log(count);
}
let arr = [1, 1, 1, 1];
let n = 4;
let k = 2;

getPairsCount(arr, n, k);
