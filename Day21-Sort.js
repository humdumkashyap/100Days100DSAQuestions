let arr = [1, 2, 3];
function Sort(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  console.log(newArr);
  return newArr;
}

Sort(arr);
