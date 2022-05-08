//Enter code here

function runProgram(input){
  input = input.trim().split("\n")
  
  let tc = +input[0]
  let line = 1
  for(let i=0; i<tc; i++) {
      let n = +input[line++]
      let arr = input[line++].trim().split(" ").map(Number)
      candies(n,arr)
  }
}

const candies = (n,arr) => {
  let candy = new Array(n).fill(1)

  // locally managing candies left to right
  for(let i = 1; i < n ; i++) {
      if (arr[i] > arr[i-1]) {
          candy[i] = candy[i-1] + 1
      }
  }
  
  // locally managing candies right to left and if value is larger at any location then
  // update previous value
  for(let i = n-2; i >=0 ; i--) {
      if (arr[i] > arr[i+1]) {
          candy[i] = Math.max(candy[i], candy[i + 1] + 1)
      }
  }
  
  let sum = 0
  for(let el of candy){
      sum += el
  }
  console.log(sum)
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