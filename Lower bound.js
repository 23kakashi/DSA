//Enter code here

function runProgram(input){
  input = input.trim().split("\n")
  
  let [n,k] = input[0].trim().split(" ").map(Number)
  let arr = input[1].trim().split(" ").map(Number)
  // arr.sort((a,b) => {return a-b})
  let ans = binarySearch(arr,n,k)
  console.log(ans)
}

const binarySearch = (arr,n,k) => {
  let start = 0
  let end = n-1
  while(start <= end) {
      let mid = Math.floor(start + (end - start)/2)
      
      if(start === end && arr[start] === k) {
          return end
      }
      
      if(arr[mid] === k) {
          if(arr[mid-1] === k) {
              end = mid - 1
          } else {
              return mid
          }
      }
      
      else if(arr[mid] < k) {
          start = mid + 1
      }
      
      else {
          end = mid - 1
      }
  }
  return -1
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