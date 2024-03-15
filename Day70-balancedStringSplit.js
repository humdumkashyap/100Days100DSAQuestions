var balancedStringSplit = function (s) {
  let count = 0;
  let pairCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "R") {
      count++;
    } else {
      if (s[i] == "L") {
        count--;
      }
      if (count == 0) {
        pairCount++;
      }
    }
  }
  return pairCount;
};
