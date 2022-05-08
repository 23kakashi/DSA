//Enter code here
function runProgram(input){
  input = input.trim().split("\n")
  
  let [n,q] = input[0].trim().split(" ").map(Number)
  let arr = input[1].trim().split(" ").map(Number)
  arr.sort((a,b) => {return a - b})
  
  let line = 2
  for(let i=0; i<q; i++) {
      let x = +input[line++]
      
      let ans = discover(n,arr,x)
      if(ans) {
          console.log('YES')
      } else {
          console.log('NO')
      }
  }

}

const discover = (n,arr,x) => {
  if(arr[0] > x) {
      return false
  }
  if(arr[n-1] < x) {
      return false
  }
  
  let start = 0
  let end = n - 1
  
  while(start <= end) {
      let mid = start + Math.floor((end - start)/2)
      
      if(arr[mid] === x) {
          return true
      }
      if(arr[mid] > x) {
          end = mid - 1
      } else {
          start = mid + 1
      }
  }
  return false
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