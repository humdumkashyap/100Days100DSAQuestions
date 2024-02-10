function find3Numbers(arr, n, X) {
  let sum;
  let leftOver = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      sum = arr[i] + arr[j];
      let remain = X - sum;
      leftOver = arr.indexOf(remain); 
      if (arr[leftOver] == remain) {
        console.log("treu");
      }
    }
  }
}
(n = 6), (X = 56);
let arr = [1, 4, 45, 6, 10, 8];
// let arr=[2,3,4,6,7,1]

find3Numbers(arr, n, X);
