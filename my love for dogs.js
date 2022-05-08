//Enter code here
function runProgram(input){
  input = input.trim().split("\n")
  
  let n = +input[0]
  let s = input[1].trim().split(" ").map(Number)
  let c = input[2].trim().split(" ").map(Number)
  s.sort((a,b) => {return a-b})
  c.sort((a,b) => {return a-b})
  dog(n,s,c)
}

const dog = (n,s,c) => {
  let total = 0
  
  for(let i=0; i<n; i++) {
      total = total + (s[i] * c[i])
  }
  console.log(total)
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