// 💪🏻💪🏻💪🏻Day-61💪💪💪

// 914. X of a Kind in a Deck of Cards
// Description
// Hints
// Submissions
// Discuss
// Solution
// You are given an integer array deck where deck[i] represents the number written on the ith card.

// Partition the cards into one or more groups such that:

// Each group has exactly x cards where x > 1, and
// All the cards in one group have the same integer written on them.
// Return true if such partition is possible, or false otherwise.

// Example 1:

// Input: deck = [1,2,3,4,4,3,2,1]
// Output: true
// Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].
// Example 2:

// Input: deck = [1,1,1,2,2,2,3,3]
// Output: false
// Explanation: No possible partition.

// Link: https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/description/

function hasGroupsSizeX(deck) {
  let unique = {};

  for (i in deck) {
    if (unique[deck[i]]) {
      unique[deck[i]]++;
    } else {
      unique[deck[i]] = 1;
    }
  }

  let arr = Object.values(unique);
  let minValue = Math.min.apply(0, arr);
  console.log("arr--", arr, "minValue--", minValue);
  let count = 0;
  for (let i = 2; i < arr.length; i++) {
    console.log(arr[i] % i, "sdsdsd");
    if (arr[i] % i == 0) {
      count++;
    }
  }

  console.log(count, "countt");

  console.log(unique);
  for (i in unique) {
    if (unique[i] == 1) {
      return false;
    } else if (typeof unique === "object" && !Array.isArray(unique)) {
      return Object.values(unique).every((value) => value % minValue == 0);
    } else {
      return false;
    }
  }
}
let deck = [1, 2, 3, 4, 4, 4, 4, 3, 2, 1];

console.log(hasGroupsSizeX(deck));
