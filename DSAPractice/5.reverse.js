// Write a function reverse(x) that takes a 32-bit signed integer and returns its digits reversed. If the reversed value overflows the 32-bit signed integer range, return 0.Reverse the digits of a 32-bit signed integer.Return 0if the result overflows.

function reverse(x) {
  let xCopy = x;
  x = Math.abs(x);
  let result = 0;
  while (x > 0) {
    let digit = x % 10;
    result = result * 10 + digit;
    x = (x / 10) | 0;
  }
  if (result > 2 ** 31 - 1) {
    return 0;
  }

  return xCopy > 0 ? result : -result;
}

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21
console.log(reverse(1534236469)); // 0 (overflow)
