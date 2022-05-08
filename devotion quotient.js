//Enter code here
function runProgram(input){
  input = input.trim().split("\n")
  let n = +input[0]
  let line = 1
  
  let devo = []
  for(let i=0; i<n; i++) {
      let temp = input[line++].trim().split(" ")
      let a = temp[0]
      let b = +temp[1]
      
      let arr = [a,b]
      devo.push(arr)
  }
  check(n,devo)
}

const check = (n,devo) => {
  // console.log(n,devo)
  
  devo.sort((a,b) => {return a[1] - b[1]})
  // console.log(devo)
  console.log(devo[n-1][0])
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