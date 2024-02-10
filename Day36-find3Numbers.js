// Given an array arr of size n and an integer X. Find if there's a triplet in the array which sums up to the given integer X.

// Example 1:

// Input:
// n = 6, X = 13
// arr[] = [1 4 45 6 10 8]
// Output:
// 1
// Explanation:
// The triplet {1, 4, 8} in
// the array sums up to 13.
// Example 2:

// Input:
// n = 5, X = 10
// arr[] = [1 2 4 3 6]
// Output:
// 1
// Explanation:
// The triplet {1, 3, 6} in
// the array sums up to 10.

// Your Task:
// You don't need to read input or print anything. Your task is to complete the function find3Numbers() which takes the array arr[], the size of the array (n) and the sum (X) as inputs and returns True if there exists a triplet in the array arr[] which sums up to X and False otherwise.

// Expected Time Complexity: O(n2)
// Expected Auxiliary Space: O(1)

function find3Numbers(arr, n, X) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      if (arr[i] + arr[left] + arr[right] === X) {
        return true;
      } else if (arr[i] + arr[left] + arr[right] < X) {
        left++;
      } else {
        right--;
      }
    }
  }

  return false;
}

console.log(find3Numbers([1, 4, 45, 6, 10, 8], 6, 13)); // Outputs: true
console.log(find3Numbers([1, 2, 4, 3, 6], 5, 10)); // Outputs: true

// function find3Numbers(arr, n, X) {
//   let sum;
//   let leftOver = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       sum = arr[i] + arr[j];
//       let remain = X - sum;
//       leftOver = arr.indexOf(remain);
//       if (arr[leftOver] == remain) {
//         console.log("treu");
//       }
//     }
//   }
// }
// (n = 6), (X = 56);
// let arr = [1, 4, 45, 6, 10, 8];
// // let arr=[2,3,4,6,7,1]

// find3Numbers(arr, n, X);
