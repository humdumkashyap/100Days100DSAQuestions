// Write a function countDigits(n)that takes an integer n and returns how many digits it contains.
// Handles both positive and negative integers.
// Return 1 if n is 0(since 0 is a single-digit number).
// Input:259
// Output:3
// Input:-1035
// Output:4
// Input:0
// Output:1

// function countDigits(num) {
//   let len = Math.abs(num).toString().split("");
//   return len.length;
// }

function countDigits(num) {
  let Num = Math.abs(num);
  let count = 0;
  if (Num == 0) {
    return 1;
  }
  for (i = Num.length; Num > 0; i++) {
    Num = Math.floor(Num / 10);
    count++;
  }
  return count;
}

// console.log(countDigits(259));
console.log(countDigits(-1035));
console.log(countDigits(0));
