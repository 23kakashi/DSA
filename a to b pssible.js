//Enter code here
function runProgram(input){
  input = input.trim().split("\n")
  let tc = +input[0]
  let line = 1
  
  for(let i=0; i<tc; i++) {
      let [a,b] = input[line++].trim().split(" ").map(Number)
      
      let ans = check(a,b)
      
      if(ans) {
          console.log("Possible")
      } else {
          console.log("Not Possible")
      }
  }
}

const check = (a,b) => {
  if(b < a) {
      return false
  }
  if(a === b) {
      return true
  }
  
  return   check(a*2, b) || check(Number(a + "1"), b)
}



if (process.env.USER === "") {
runProgram(``);
} else {
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  read = read.replace(/\n$/, "");
  runProgram(read);
});
process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
}