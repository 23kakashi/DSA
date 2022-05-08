//Enter code here

function runProgram(input){
  input = input.trim().split("\n")
  let tc = +input[0]
  let line = 1
  
  for(let i=0; i<tc; i++) {
      let n = +input[line++]
      let arr = input[line++].trim().split(" ").map(Number)
      let pivot = getPivot(arr, 0, n-1)
      console.log(pivot)
  }
}

// O(n) Brute force linear search
// const getPivot = (arr,start,end) => {
  
//     for(let i=0; i<arr.length; i++) {
//         if(arr[i] > arr[i+1]) {
//             return i
//         }
//     }
// }


// O(logn)  -- Binary search

const getPivot = (arr,start,end) => {
  let n = arr.length - 1
  while(start <= end){
   
      mid = start + Math.floor((end - start)/2);
          
      if((mid === 0 || arr[mid - 1] <= arr[mid]) && (mid === n - 1 || arr[mid + 1] <= arr[mid]))
          break;

      if(mid > 0 && arr[mid - 1] > arr[mid])
          end = mid - 1;
          else start = mid + 1;
      }
      return mid;
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