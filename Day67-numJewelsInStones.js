function numJewelsInStones(jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      if (stones[i] == jewels[j]) {
        count++;
      }
    }
  }

  return count;
}

let jewels = "aA";
let stones = "aAAbbbb";
console.log(numJewelsInStones(jewels, stones));
