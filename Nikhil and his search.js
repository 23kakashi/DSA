//Enter code here
function runProgram(input){
    
  input = input.trim().split('\n')
  let n = +input[0]
  let arr = input[1].trim().split(" ").map(Number)
  arr = arr.sort((a,b) => {return (a-b)})
  let Q = +input[2]
  let line = 3
  for(let i=0; i<Q; i++) {
      let [type, value] = input[line++].trim().split(" ").map(Number)
      
      let ans = null
      if(type === 0) {
          ans = lowerBound(arr,n,value)
          console.log(n - ans)
      } else {
          ans = upperBound(arr,n,value)
          console.log(n - ans)
      }
  }
}

const upperBound = (arr,n,value) => {
  if(value >= arr[n-1] ) {
      return n
  }
  if(arr[0] > value) {
      return 0
  }
  
  let start = 0
  let end = n-1
  
  while(start <= end) {
      
      let mid = start + Math.floor((end - start)/2)
      
      if(arr[mid] === value) {
          if(arr[mid + 1] > value) {
              return mid + 1
          }
          else if(arr[mid + 1] === value) {
              start = mid + 1
          }
      }
      
      if(arr[mid] < value) {
          if(arr[mid + 1] > value) {
              return (mid + 1)
          } else {
              start = mid + 1
          }
      }
      
      if(arr[mid] > value) {
          if(arr[mid - 1] < value) {
              return mid
          } else {
              end = mid - 1
          }
      }
  }
}

const lowerBound = (arr,n,value) => {
  if(value > arr[n-1] ) {
      return n
  }
  if(arr[0] > value) {
      return 0
  }
  
  let start = 0
  let end = n-1
  
  while(start <= end) {
      
      let mid = start + Math.floor((end - start)/2)
      
      if(arr[mid] === value) {
          if(arr[mid - 1] === value) {
              end = mid - 1
          } else {
              return mid
          }
      }
      
      if(arr[mid] < value) {
          if(arr[mid + 1] > value) {
              return (mid + 1)
          } else {
              start = mid + 1
          }
      }
      
      if(arr[mid] > value) {
          if(arr[mid - 1] < value) {
              return mid
          } else {
              end = mid - 1
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
};