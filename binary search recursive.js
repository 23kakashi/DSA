//Enter code here

function runProgram(input){
  input = input.trim().split("\n")
  
  let [n,k] = input[0].trim().split(" ").map(Number)
  let arr = input[1].trim().split(" ").map(Number)
  arr.sort((a,b) => {return a-b})
  let ans = binarySearch(arr,0,n-1,k)
  console.log(ans)
}

const binarySearch = (arr,start,end,k) => {
   if (end >= start) {
      let mid = start + Math.floor((end - start) / 2)

      if (arr[mid] === k)
          return 1

      if (arr[mid] > k)
          return binarySearch(arr, start, mid - 1, k)

      return binarySearch(arr, mid + 1, end, k)
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