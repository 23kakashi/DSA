//Enter code here
function runProgram(input){
  input = input.trim().split("\n")

  let n = +input[0]
  let arr = input[1].trim().split(" ").map(Number)
  let ans = buggy(n,arr)
  console.log(ans)
}

const buggy = (n,arr) => {
  let start = 0
  let end = n - 1
  
  if(arr[n-1] === 0) {
      return -1
  }
  
  while(start <= end) {
      
      let mid = start + Math.floor((end - start)/2)
      
      if(arr[mid] === 1) {
          if(arr[mid-1] === 0) {
              return mid
          } else {
              end = mid - 1
          }
      }
      
      if(arr[mid] === 0) {
          start = mid + 1
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