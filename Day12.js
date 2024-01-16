// Given a string, return the first recurring character in it,
//or null if there is no recurring character. For example, given the string "acbbac", return "b".
//Given the string "abcdef", return null.

function firstRecurringCharacter(str) {
  let char = {};
  for (let i = 0; i < str.length; i++) {
    if (char[str[i]]) {
      return str[i];
    }
    char[str[i]] = true;
  }
  return null;
}

console.log(firstRecurringCharacter("acbbac"));
console.log(firstRecurringCharacter("abcdef"));
