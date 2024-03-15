function arrayStringsAreEqual(word1, word2) {
  //sol-1
  let str1;
  let str2;

  function concat(str) {
    let concatstr = "";
    for (let i = 0; i < str.length; i++) {
      concatstr += str[i];
    }
    return concatstr;
  }

  str1 = concat(word1);
  str2 = concat(word2);

  return str1 == str2;

  //sol-2
  // let str1 = word1.join("");
  // let str2 = word2.join("");
  // console.log(str1, str2);
  // return str1 === str2;
}

let word1 = ["abc", "d", "defg"];
let word2 = ["abcddefg"];
console.log(arrayStringsAreEqual(word1, word2));
