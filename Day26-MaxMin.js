let arr = [3, 5, 4, 1, 9];

const MaxMin = (arr) => {
  let newArr = arr.sort();
  let min = newArr[0];
  let max = newArr.length - 1;

  console.log(`Minimum element is: ${newArr[0]} 
Maximum element is: ${newArr[max]}`);
  return `Minimum element is: ${newArr[0]} 
Maximum element is: ${newArr[max]}`;
};

MaxMin(arr);
