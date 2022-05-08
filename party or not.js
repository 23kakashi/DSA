//Enter code here

function runProgram(input){
  input = input.trim().split("\n")
  
  let [N,C,R] = input[0].trim().split(" ").map(Number)
  let amount = input[1].trim().split(" ").map(Number)
  amount.sort((a,b) => {return a-b})
  // console.log(amount)
  ashu(N,C,R,amount)
}

const ashu = (N,C,R,amount) => {
  let total = 0
  for(let i=0; i<C; i++) {
      total += amount[i]
  }
  
  if(total <= R) {
      console.log('Party')
  } else {
      console.log('Sad')
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