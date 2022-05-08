//Enter code here

function runProgram(input){
  input = input.trim().split("\n")
  

  let n = +input[0]
  let vaccine = input[1].trim().split(" ").map(Number)
  let patient = input[2].trim().split(" ").map(Number)
  
  vaccine.sort((a,b) => {return a-b})
  patient.sort((a,b) => {return a-b})
  
  virus(n,vaccine,patient)
}

const virus = (n,vaccine,patient) => {
  
  for(i=0; i<n; i++) {
      if(vaccine[i] <= patient[i]) {
          console.log('No')
          return
      }
  }
  console.log('Yes')
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