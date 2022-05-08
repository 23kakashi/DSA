//Enter code here
function runProgram(input){
  input = input.trim().split("\n")
  let tc = +input[0]
  let line = 1
  
  for(let i=0; i<tc; i++) {
      let arr = input[line++].trim().split(" ").map(Number)
      
      missing(arr)
  }
}

const missing = (arr) => {
  let left = 0, right = arr.length - 1
  
while (left <= right) { 

  let mid = Math.floor((left + right) / 2) 

  if (arr[mid] != mid + 1 && arr[mid - 1] == mid) {
      console.log(mid + 1)
          return        
      }
  if (arr[mid] == mid + 1) {
    left = mid + 1
  } else {
    right = mid - 1
  }
} 
console.log(10) 
  
  // brute force
  // for(let i=0; i<10; i++) {
  //     if(arr[i] !== i) {
  //         console.log(i)
  //         return
  //     }
  // }
  // console.log(10)
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