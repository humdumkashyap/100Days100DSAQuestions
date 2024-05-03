function minFlips(s) {
  let n = s.length;
  let odd = new Array(n + 1).fill(0);
  let even = new Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    if (i % 2 !== 0) {
      odd[i + 1] = odd[i] + (s[i] === "1" ? 1 : 0);
      even[i + 1] = even[i] + (s[i] === "0" ? 1 : 0);
    } else {
      odd[i + 1] = odd[i] + (s[i] === "0" ? 1 : 0);
      even[i + 1] = even[i] + (s[i] === "1" ? 1 : 0);
    }
  }

  let res = Math.min(odd[n], even[n]);

  for (let i = 0; i < n; i++) {
    if (n % 2 !== 0) {
      res = Math.min(res, odd[n] - odd[i + 1] + even[i + 1]);
      res = Math.min(res, even[n] - even[i + 1] + odd[i + 1]);
    }
  }

  return res;
}

console.log(minFlips("01001001101"));
console.log(minFlips("111000"));
console.log(minFlips("01001001101"));
console.log(minFlips("111000"));
