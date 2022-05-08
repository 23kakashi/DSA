//Enter code here
// find pivot
// Check if both the array are sorted around the pivot

function runProgram(input){
  input = input.trim().split("\n")
  
  let n = +input[0]
  let arr = input[1].trim().split(" ").map(Number)
  let pivot = getPivot(arr, 0, n-1)
  console.log(pivot)
  
  if(pivot === n-1) {
      console.log("NO")
  } else {
      let flag1 = false
      let flag2 = false
      flag1 = checkSorted(arr,0,pivot)
      flag2 = checkSorted(arr,pivot+1,n-1)
  
      // console.log(flag1,flag2)
      if(flag1 && flag2) {
          console.log("YES")
      } else {
          console.log("NO")
      }
  }
}

const checkSorted = (arr,start,end) => {
  let n = end - start
  
  if(n === 0) {
      return false
  }
  
  for(let i=start; i<end; i++) {
      if(arr[i] > arr[i+1]) {
          return false
      }
  }
  return true
}

const getPivot = (arr,start,end) => {

  if (end < start) {
      return arr.length - 1
  }
  if (end === start) {
      return start
  }
  
  let mid = start + Math.floor((end - start)/2)
  
  //In increasing array this condition will be  true only for pivot element
  if (arr[mid] > arr[mid + 1]) {
      return mid
  }

  if (arr[mid] < arr[mid - 1]) {
      return (mid - 1)
  }

  if (arr[start] >= arr[mid]) {
      return getPivot(arr, start, mid - 1)
  }

  return getPivot(arr, mid + 1, end)
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