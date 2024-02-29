// 💪🏻💪🏻💪🏻Day-56💪💪💪

// You are given a string S of 2N characters consisting of N ‘[‘ brackets and N ‘]’ brackets. A string is considered balanced if it can be represented in the form S2[S1] where S1 and S2 are balanced strings. We can make an unbalanced string balanced by swapping adjacent characters.
// Calculate the minimum number of swaps necessary to make a string balanced.

// Note - Strings S1 and S2 can be empty.

// Example 1:

// Input  : []][][
// Output : 2
// Explanation :
// First swap: Position 3 and 4
// [][]][
// Second swap: Position 5 and 6
// [][][]

// Example 2:

// Input : [[][]]
// Output : 0
// Explanation:
// String is already balanced.

// Your Task:

// You don't need to read input or print anything. Your task is to complete the function minimumNumberOfSwaps() which takes the string S and return minimum number of operations required to balance the bracket sequence.

// Link: https://www.geeksforgeeks.org/problems/minimum-swaps-for-bracket-balancing2704/1

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
