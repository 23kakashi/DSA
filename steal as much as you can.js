//Enter code here
function runProgram(input){
  input = input.trim().split("\n")
  
  let n = +input[0]
  let gas = input[1].trim().split(" ").map(Number)
  let cost = input[2].trim().split(" ").map(Number)
  travel(n,gas,cost)
}

const travel = (n,gas,cost) => {
  
let start = 0
let curr = 0
let total = 0

for (let i=0; i<n; i++) {
  curr += gas[i] - cost[i]
  total += gas[i] - cost[i]
  
  if (curr < 0) {
    start = i + 1
    curr = 0
  }
  // console.log(total)
}

if(total >= 0) {
    console.log(start)
} else {
    console.log(-1)
}
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