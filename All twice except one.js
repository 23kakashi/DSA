//Enter code here
function runProgram(input){
  input = input.trim().split("\n")
  let tc = +input[0]
  let line = 1
  for(let i=0; i<tc; i++) {
      let n = +input[line++]
      let arr = input[line++].trim().split(" ").map(Number)
      arr.sort((a,b) => {return a-b})
      let ans = twice(n,arr)
      console.log(ans)
  }
}

const twice = (n,arr) => {
  if(n === 1) {
      return arr[0]
  }
  let a = 0
  let b = 1
  
  while(b < n) {
      // console.log(arr[a],arr[b])
      if(arr[a] === arr[b]) {
          a = a + 2
          b = b + 2
      }
      else {
          return arr[a]
      }
  }
  return arr[n-1]
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