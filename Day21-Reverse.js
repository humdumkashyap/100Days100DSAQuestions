let arr = [1, 2, 3];
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Reverse(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  console.log(newArr);
  return newArr;
}

Reverse(arr2);
