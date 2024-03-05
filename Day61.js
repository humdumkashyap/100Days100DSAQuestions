function hasGroupsSizeX(deck) {
  let unique = {};

  for (i in deck) {
    if (unique[deck[i]]) {
      unique[deck[i]]++;
    } else {
      unique[deck[i]] = 1;
    }
  }

  for (i in unique) {
    if (typeof unique === "object" && !Array.isArray(unique)) {
      return Object.values(unique).every((value) => value % 2 == 0);
    } else {
      return false;
    }
  }
}
let deck = [1, 2, 3, 4, 4, 4, 4, 3, 2, 1];

console.log(hasGroupsSizeX(deck));
