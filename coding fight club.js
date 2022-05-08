//Enter code here

function runProgram(input){
  input = input.trim().split("\n")
  
  let N = +input[0]
  let line = 1
  let soldiers = []
  for(let i=0; i<N; i++) {
      soldiers.push(+input[line++])
  }
  // console.log(soldiers)
  soldiers.sort((a,b) => {return (a-b)})
  let Q = input[line++]
  let piyush = []
  for(let i=0; i<Q; i++) {
      piyush.push(+input[line++])
  }
  // console.log(piyush)
  fight(soldiers,piyush)

}

const fight = (soldiers,piyush) => {
  for(let i=0; i<piyush.length; i++) {
      let sum = 0
      // console.log(piyush[i])
      for(let j=0; j<soldiers.length; j++) {
          if(piyush[i] < soldiers[j]) {
              console.log(j,sum)
              break;
          }
          sum += soldiers[j]
          if(j === soldiers.length - 1) {
              console.log(soldiers.length,sum)
          }
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