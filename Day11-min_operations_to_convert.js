// Given two strings A and B, the task is to convert A to B if possible. The only operation allowed is to put any character from A and insert it at front. Find if it’s possible to convert the string. If yes, then output minimum no. of operations required for transformation.

// Examples:

// Input:  A = "ABD", B = "BAD"
// Output: 1
// Explanation: Pick B and insert it at front.
// Input:  A = "EACBD", B = "EABCD"
// Output: 3
// Explanation: Pick B and insert at front, EACBD => BEACD
//              Pick A and insert at front, BEACD => ABECD
//              Pick E and insert at front, ABECD => EABCD

function minOperationsToConvert(A, B) {
  if (A.length !== B.length) return -1;

  let count = 0;
  let j = B.length - 1;

  for (let i = A.length - 1; i >= 0; i--) {
    if (A[i] === B[j]) {
      j--;
    } else {
      count++;
    }
  }

  return count;
}

console.log(minOperationsToConvert("EACBD", "EABCD"));
console.log(minOperationsToConvert("ABD", "BAD"));
