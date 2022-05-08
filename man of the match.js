//Enter code here
function runProgram(input){
  input = input.trim().split("\n")
  let tc = +input[0]
  let line = 1
  
  for(let i=0; i<tc; i++) {
      let n = +input[line++]
      let arr = input[line++].trim().split(" ").map(Number)

      check(n,arr)
  }
}

const check = (n,arr) => {
  let virat = 0
  let abd = 0
  let strike = true
  let count = 1
  for(let i=0; i<(6*n); i++) {
      if(strike) {
          abd += arr[i]
      } else {
          virat += arr[i]
      }
      
      if(count%6 === 0 && (arr[i] === 1 || arr[i] === 3)) {
          strike = !strike
      }
      if(count % 6 === 0 || arr[i] === 1 || arr[i] === 3 ) {
         strike = !strike
      }
      count++
  // console.log(arr[i], "run")
  // console.log(virat)
  // console.log(abd)
  }
  
  if(virat > abd) {
      console.log("Virat Kohli")
  } 
  else if(abd > virat) {
      console.log("AB de Villiers")
  } else {
      console.log("Tie")
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