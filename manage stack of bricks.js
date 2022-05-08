//Enter code here
function runProgram(input){
  input = input.trim().split("\n")
  
  let tc = +input[0]
  let line = 1
  
  for(let i=0; i<tc; i++) {
      let n = +input[line++]   
      let x = +input[line++] 
      let y = +input[line++] 
      let a = []
      let b = []
      for(let j=0; j<n; j++) {
          let temp = input[line].trim().split(" ").map(Number)
          a.push(temp[0])
          b.push(temp[1])
          line++
      }
      a.sort((a,b) => {return a-b})
      b.sort((a,b) => {return a-b})
      bricks(n,x,y,a,b)
  }
}

const bricks = (n,x,y,a,b) => {
  // console.log(a,b)
  let put = 0
  let pull = 0
  for(let i=0; i<n; i++) {
      if(a[i] > b[i]) {
          pull += a[i] - b[i]
      }
      else if(a[i] < b[i]) {
          put += b[i] - a[i]
      }
  }
  // console.log(put,pull)
  let total = (put * x) + (pull * y)
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