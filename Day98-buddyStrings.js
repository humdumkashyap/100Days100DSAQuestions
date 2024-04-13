var buddyStrings = function (s, goal) {
  if (s.length !== goal.length) return false;
  if (s === goal) {
    const set = new Set(s);
    return set.size < s.length;
  }

  let first = -1,
    second = -1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      if (first === -1) first = i;
      else if (second === -1) second = i;
      else return false;
    }
  }

  return (
    second !== -1 && s[first] === goal[second] && s[second] === goal[first]
  );
};

console.log(buddyStrings("ab", "ba")); //true
console.log(buddyStrings("ab", "ab")); //false
