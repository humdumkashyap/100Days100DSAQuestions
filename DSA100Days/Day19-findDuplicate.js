// Find the Duplicate Number

// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number. You must solve the problem without modifying the array nums and uses only constant extra space.

// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3

// sol -1
function findDuplicate(arr) {
  let char = {};
  for (let i = 0; i < arr.length; i++) {
    if (char[arr[i]]) {
      console.log(arr[i]);
      return arr[i];
    }
    char[arr[i]] = 1;
  }
  return null;
}

findDuplicate([1, 3, 4, 2, 2]);

// sol -2
// function findDuplicate(arr){
//     let newArr=arr.sort()
//     for(let i=0;i<arr.length ;i++){
//         if(newArr[i]==newArr[i+1]){
//             console.log( newArr[i])
//             return newArr[i]
//         }
//     }

// }
// findDuplicate([1, 3, 4, 2, 2]);

// sol -3

// var findDuplicate = function(arr) {

//     let newArr={}

//     for(i in arr){
//        if(newArr[arr[i]]){
//           newArr[arr[i]]++

//        }else{
//            newArr[arr[i]]=1
//        }
//     }
//      console.log (newArr)
//     for(j in newArr){

//        if (newArr[j]>1) {
//            console.log(j)
//            return j
//        }

//     }

// };

// findDuplicate([1, 3, 4, 2, 2]);
