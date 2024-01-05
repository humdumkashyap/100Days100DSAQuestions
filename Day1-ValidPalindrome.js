let str1 = "A man, a plan, a canal: Panama";
// let str1 ="race a car"
//let str1 = "";
var isPalindrome = function (s) {
  let plainArray = s
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase()
    .split("");
  let newstr = plainArray.join("");
  let reverseStr = plainArray.reverse().join("");

  if (newstr == reverseStr || newstr == "") {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
};

isPalindrome(str1);
