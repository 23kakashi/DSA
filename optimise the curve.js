//Enter code here

function runProgram(input){
  input = input.trim().split("\n")
  let tc = +input[0]
  let line = 1
  
  for(let i=0; i<tc; i++) {
      let [a,b,c,k] = input[line++].trim().split(" ").map(Number)
      let ans = ross(a,b,c,k)
      console.log(ans) 
  }
}

const ross = (a,b,c,k) => {
  let x = 1
  while(k - c >= x ) {
      
      if((a*x) + b >= (k-c)/x) {
          return x
      } 
      x++
  }
  return -1
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