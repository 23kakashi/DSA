//Enter code here

function runProgram(input){
  input = input.trim().split("\n")
  
  let [n,k] = input[0].trim().split(" ").map(Number)
  let arr = input[1].trim().split(" ").map(Number)
  let pivot = getPivot(arr, 0, n-1)
  console.log(pivot)
  
  let ans = null
  if(k <= arr[pivot] && k >= arr[0]) {
      ans = search(arr,0,pivot,k)
  } else {
      ans = search(arr,pivot+1,n-1,k)
  }
  
  console.log(ans)
}

const search = (arr,start,end,k) => {
  while(start <= end) {
      let mid = start + Math.floor((end - start)/2)
      
      if(arr[mid] === k) {
          return mid
      }
      if(arr[mid] > k) {
          end = mid - 1
      } else {
          start = mid + 1
      }
  }
  return -1
}

const getPivot = (arr,start,end) => {

  if (end < start) {
      return -1
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