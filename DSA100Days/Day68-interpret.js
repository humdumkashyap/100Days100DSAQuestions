// You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

// Given the string command, return the Goal Parser's interpretation of command.

// Example 1:

// Input: command = "G()(al)"
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".
// Example 2:

// Input: command = "G()()()()(al)"
// Output: "Gooooal"
// Example 3:

// Input: command = "(al)G(al)()()G"
// Output: "alGalooG"

function interpret(command) {
  //sol-1
  command = command.replaceAll("()", "o").replaceAll("(al)", "al");
  return command;

  //sol-2
  // command = command.replaceAll("()", "o").replaceAll("(al)", "al");
  // command = command.replaceAll("(al)", "al");
  // return command;

  //sol-3
  // let newStr=""
  // for(let i=0;i<command.length;i++){
  //     if(command[i]=="G"){
  //         newStr+=command[i]
  //     }else if(command[i]=="(" && command[i+1]==")" ){
  //           newStr+="o"
  //           i++
  //     }else if(command[i]=="(" && command[i+1]=="a" && command[i+2]=="l" && command[i+3]==")" ) {
  //          newStr+="al"
  //      i+3
  //     }

  // }
  // return newStr
}

let command = "(al)G(al)()()G";
console.log(interpret(command));
