// 💪🏻💪🏻💪🏻Day-57💪💪💪

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]

// Link: https://leetcode.com/problems/generate-parentheses/description/

function generateParenthesis(n) {
  const result = [];

  const generate = (current, open, close) => {
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    if (open < n) {
      generate(current + "(", open + 1, close);
    }

    if (close < open) {
      generate(current + ")", open, close + 1);
    }
  };

  generate("", 0, 0);

  return result;
}

console.log(generateParenthesis(3));
