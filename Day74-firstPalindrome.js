function firstPalindrome(words) {
  let newStr = "";
  let flag = false;

  function reverse(str) {
    let revStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      revStr += str[i];
    }
    return revStr;
  }

  for (let i = 0; i < words.length; i++) {
    let newStr = reverse(words[i]);
    if (newStr == words[i]) {
      flag = true;
      newStr = words[i];
    } else {
      flag = false;
    }
  }

  if (flag == true) {
    return newStr;
  } else {
    return "";
  }
}


    

words = ["abc", "car", "ada", "racecar", "cool"];

console.log(firstPalindrome(words));
