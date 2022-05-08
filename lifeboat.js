//Enter code here
function runProgram(input){
  input = input.trim().split("\n")
  let tc = +input[0]
  let line = 1
  
  for(let i=0; i<tc; i++) {
      let [n,k] = input[line++].trim().split(" ").map(Number)
      let arr = input[line++].trim().split(" ").map(Number)
      arr.sort((a,b) => {return a-b})
      
      boat(n,k,arr)
  }
}

const boat = (n,k,arr) => {
  let start = 0
  let end = n - 1
  let count = 0
  while(start <= end) {
      if(arr[start] + arr[end] <= k) {
          count++
          start++
          end--
      }
      
      else if(arr[start] + arr[end] > k) {
          end--
          count++
      }
  }
  console.log(count)
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