function maximumWealth(n) {
  //  sol-2
  let maxMoney = -Infinity;
  let sum;

  function Reduce(singleSum) {
    return singleSum.reduce((acc, current) => {
      return acc + current;
    }, 0);
  }
  for (let i = 0; i < n.length; i++) {
    sum = Reduce(n[i]);
    console.log(sum);
    if (sum > maxMoney) {
      maxMoney = sum;
      console.log(maxMoney, "maxMoney");
    }
  }
  return maxMoney;

  //  sol- 1
  // let maxMoney=-Infinity
  // let sum

  //  for( let i=0;i<n.length;i++){
  //      sum= n[i].reduce((acc,current)=>{
  //     return acc+current},0)
  //   if(sum>maxMoney){
  //       maxMoney=sum
  //     console.log(maxMoney,"maxMoney")
  //   }

  // }
  // return maxMoney
}
// let n=[1,2,3]
let n = [
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5],
];
console.log(maximumWealth(n));
