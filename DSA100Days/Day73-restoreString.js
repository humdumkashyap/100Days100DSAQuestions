function restoreString(s, indices) {
  let str = {};
  let finalStr = "";
  for (let i of indices) {
    [str[indices[i]]] = s.charAt(i);
  }
  for (let i in str) {
    finalStr += str[i];
  }

  return finalStr;
}

let s = "codeleet";
let indices = [4, 5, 6, 7, 0, 2, 1, 3];

console.log(restoreString(s, indices));
