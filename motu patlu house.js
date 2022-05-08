function runProgram(input){
  input = +input
  
  steps(input)
}

const steps = (n) => {
  let count = 0
  while(true) {
      if(n >= 5) {
          n -= 5
      }
      else if(n === 4) {
          n -= 4
      }
      else if(n === 3) {
          n -= 3
      }
      else if(n === 2) {
          n -= 2
      } 
      else if(n === 1) {
          n -= 1
      }
      count++
      
      if(n === 0) {
          console.log(count)
          return
      }
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