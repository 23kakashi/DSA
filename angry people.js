//Enter code here
function runProgram(input){
  input = input.trim().split("\n")

  let n = +input[0]
  let arr = input[1].trim().split(" ").map(Number)
  
  arr.sort((a,b) => {return a-b})
  danger(n,arr)
}

const danger = (n,arr) => {
  let max = 0
  
  for(let i=2; i<n; i+=2) {
      let value = arr[i] - arr[i-2]
      max = Math.max(max,value)
  }

  for(let i=3; i<n; i+=2) {
      let value = arr[i] - arr[i-2]
      max = Math.max(max,value)
  }
  console.log(max)
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