function minimumNumberOfSwaps(s) {
  let count = 0;
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "[" && s[i + 1] == "]") {
      str = s[i] + s[i + 1] + str;
      console.log(str, count, i, "inner");
      i++;
      continue;
    } else if (s[i] == "]" && s[i + 1] != "[") {
      count++;
      console.log(str, count, "i--", i);
    }
  }
}

minimumNumberOfSwaps("[]][][");
