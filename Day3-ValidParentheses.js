var isValid = function (s) {
  let newArr = [];
  let arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    console.log("dskd", i);
    if (arr[i] == "(") {
      newArr.push(")");
    } else if (arr[i] == "{") {
      newArr.push("}");
    } else if (arr[i] == "[") {
      newArr.push("]");
    } else if (newArr.lenght === 0 || newArr.pop() !== arr[i]) {
      return false;
    }
  }
  return newArr.length === 0 ? true : false;
};
