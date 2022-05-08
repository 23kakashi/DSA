//Enter code here

function runProgram(input){
  input = input.trim().split("\n")
  
  let n = +input[0]
  let strength = input[1].trim().split(" ").map(Number)
  let protein = input[2].trim().split(" ").map(Number)
  
  strength.sort((a,b) => {return a-b})
  protein.sort((a,b) => {return a-b})
  
  gym(n,strength,protein)
}

const gym = (n,strength,protein) => {
  
  let total = 0
  for(i=0; i<n; i++) {
      total += strength[i] * protein[i]
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