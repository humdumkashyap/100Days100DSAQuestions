// Write a function isPalindrome(x) that takes an integer x and returns true if it reads the same backward and forward; otherwise false.
// Handles both positive and negative integers.
// Return falsefor negative numbers (not Palindromes).

function isPalindrome(x) {
  let revNum;
  let xWithLenth = x.toString();
  let count = Math.floor(xWithLenth.length / 2);

  for (let i = 0; i < Math.floor(xWithLenth.length / 2); i++) {
    if (xWithLenth[i] == xWithLenth[xWithLenth.length - i - 1]) {
      count--;
    } else {
      return false;
    }
  }
  if (count == 0) {
    return true;
  }
}
console.log(isPalindrome(0));
console.log(isPalindrome(1));
console.log(isPalindrome(11));
console.log(isPalindrome(121));
console.log(isPalindrome(1221));
console.log(isPalindrome(12331));
