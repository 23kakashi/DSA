//Enter code here
function runProgram(input){
  input = input.trim().split("\n")

  let n = +input[0]
  let arr = input[1].trim().split(" ").map(Number)
  let k = +input[2]
  
  search(n,k,arr)
}

const search = (n,k,arr) => {
  let upper = upperBound(n,k,arr)
  let lower = lowerBound(n,k,arr)
  // console.log(lower, upper)
  
  if(upper === -1) {
      console.log(-1,-1,0)
      return
  }
  let count = upper - lower
  console.log(lower, upper - 1, count)
}

const lowerBound = (n,k,arr) => {
  let start = 0
  let end = n - 1
  
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

const upperBound = (n,k,arr) => {
  let start = 0
  let end = n-1
  while(start <= end) {
      let mid = Math.floor(start + (end - start)/2)
      
      if(start === end && arr[start] === k) {
          return (end + 1)
      }
      
      if(arr[mid] === k) {
          if(arr[mid+1] === k) {
              start = mid + 1
          } else {
              return (mid + 1)
          }
      }
      
      else if(arr[mid] < k) {
          start = mid + 1
      }
      
      else {
          if(arr[mid-1] > k) {
              end = mid - 1
          } else {
              return mid
          }
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