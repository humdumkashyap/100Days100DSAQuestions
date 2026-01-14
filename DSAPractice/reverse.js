// Write a function reverse(x) that takes a 32-bit signed integer and returns its digits reversed. If the reversed value overflows the 32-bit signed integer range, return 0.Reverse the digits of a 32-bit signed integer.Return 0if the result overflows.

function reverse(x) {
  const INT_MIN = -(2 ** 31);
  const INT_MAX = 2 ** 31 - 1;
  let result = 0;
  while (x !== 0) {
    const digit = x % 10;
    result = result * 10 + digit;
    x = (x / 10) | 0;
    if (result < INT_MIN || result > INT_MAX) {
      return 0;
    }
  }
  return result;
}

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21
console.log(reverse(1534236469)); // 0 (overflow)
