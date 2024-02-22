var lengthOfLongestSubstring = function (s) {
  let arr = [];
  let count = 0;
  let maxCount = 0;

  for (i of s) {
    if (arr.includes(i)) {
      arr.splice(0, arr.length, i);
      console.log(arr, "delete");
    } else {
      arr.push(i);
      count++;
      maxCount = Math.max(maxCount, count);

      console.log(arr, count);
    }
  }

  return maxCount;

  //   let obj={}
  // let count=0
  // for(i in s){
  //     if(!obj[s[i]]){
  //          obj[s[i]]=i
  //          count++
  //     }else{

  //     }

  // }

  // return count
};
let s = "dvdf";
console.log(lengthOfLongestSubstring(s));
