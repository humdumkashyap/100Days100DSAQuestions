let s = "anagram";
let t = "nagaram";
var isAnagram = function (s, t) {
  let str1 = s.toLowerCase().split("").sort().join("");
  let str2 = t.toLowerCase().split("").sort().join("");

  if (str1 == str2) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
};

isAnagram(s, t);
