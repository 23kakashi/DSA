//Enter code here

function runProgram(input) {
  input = input.trim().split("\n");
  let [size,days] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  
  let start = Math.max(...arr)
  let end = start * size
  
  let ans = -1
  
  while(start <= end) {
      let mid = start + Math.floor((end - start)/2)
      console.log(start ,end, mid)
      if(check(mid,size,arr,days)) {
          ans = mid
          end = mid - 1
      } else {
          start = mid + 1
      }
  }
  console.log(ans)
} 

function check(key,size,arr,days) {
  
  let x = 0
  let count = 0
  while(x < size) {
      let time = 0
      while(time + arr[x] <= key) {
          time += arr[x]
          x++
      }
      count++
  }
  if(count <= days) {
      return true
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