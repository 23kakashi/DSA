//Enter code here

function runProgram(input){
  input = input.trim().split("\n")
  
  let n = +input[0]
  let stu = input[1].trim().split(" ").map(Number)
  let room = input[2].trim().split(" ").map(Number)
  
  stu.sort((a,b) => {return a-b})
  room.sort((a,b) => {return a-b})
  hostel(n,stu,room)
}

const hostel = (n,stu,room) => {
   let maxValue = 0;
   for (let i=0; i<n; i++) {
    let temp = Math.abs(stu[i] - room[i]);
    maxValue = Math.max(temp, maxValue);
  }
  console.log(maxValue)
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
}//Enter code here