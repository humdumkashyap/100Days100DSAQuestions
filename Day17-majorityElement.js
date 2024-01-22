// let arr=[2,2,1,1,2,2]

let arr = [3, 2, 2, 2, 2, 2, 2, 2, 3];

function majorityElement(arr) {
  let newArr = {};
  for (x in arr) {
    if (newArr[arr[x]]) {
      newArr[arr[x]]++;
    } else {
      newArr[arr[x]] = 1;
    }
  }
  console.log(newArr);
  let max = 0;
  let index = 0;

  for (x in newArr) {
    if (newArr[x] > max) {
        index = x;
      max = newArr[x];
    }
  }

  return index;
}

console.log(majorityElement(arr));
