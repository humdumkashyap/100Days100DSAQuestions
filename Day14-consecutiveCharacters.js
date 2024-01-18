function consecutiveCharacters(s) {
  if (!s || s.length === 0) {
    return 0;
  }

  let maxPower = 1;

  for (let i = 0; i < s.length; i++) {
    let currentPower = 1;

    for (let j = i + 1; j < s.length && s[j] === s[i]; j++) {
      currentPower++;
    }

    maxPower = Math.max(maxPower, currentPower);
  }

  return maxPower;
}

const str = "abbcccddddeeeeedcba";
console.log(consecutiveCharacters(str));
