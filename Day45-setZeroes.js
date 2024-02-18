// 🚀🚀🚀Day-45🚀🚀🚀

// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

// Example 1:

// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
// Example 2:

// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// Link: https://leetcode.com/problems/set-matrix-zeroes/description/

var setZeroes = function (matrix) {
  let index = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(matrix[i], "row");
      if (matrix[i][j] == 0) {
        index.push(j);
        console.log(index, "index");
      }
    }
  }

  //fill row with 0
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].includes(0)) {
      matrix[i].fill(0);
    }
  }

  //fill col with 0
  for (let i = 0; i < matrix.length; i++) {
    for (j of index) {
      matrix[i][j] = 0;
    }
  }

  return matrix;
};
let matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
console.log(setZeroes(matrix));
