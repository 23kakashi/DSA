//Enter code here
function runProgram(input){
  input = input.trim().split("\n")
  
  let tc = +input[0]
  let line = 1
  
  for(let i=0; i<tc; i++) {
      let n = +input[line++]    
      let ash = input[line++].trim().split(" ").map(Number)
      let gary = input[line++].trim().split(" ").map(Number)
      ash.sort((a,b) => {return a-b})
      gary.sort((a,b) => {return a-b})
      redeption(n,ash,gary)
  }
}

const redeption = (n,ash,gary) => {
  for(let i=0; i<n; i++) {
      if(ash[i] <= gary[i]) {
          console.log("Train Hard Again")
          return
      }
  }
  console.log("Ash Finally Wins")
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