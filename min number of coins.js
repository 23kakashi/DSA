//Enter code here

function runProgram(input){
  input = input.trim().split("\n")
  
  let tc = +input[0]
  let line = 1
  
  let arr = [1, 2, 5, 10, 20, 50, 100, 500, 1000]
  for(let i=0; i<tc; i++) {
      let n = +input[line++]

      let ans = coins(n,arr)
      console.log(ans)
  }
}

const coins = (n,arr) => {
  let count = 0
  let curr = n
  
  
  if(n > 1000) {
      count += Math.floor(curr/1000)
      curr = curr % 1000
  }
  if(curr === 0) {
      return count
  }
  // console.log(count)
  // console.log(curr)
  while(curr > 0) {
      
      for(let i=0; i<n; i++) {
          if(arr[i] === curr) {
              count++
              return count
          }
          else if(arr[i] < curr && arr[i+1] > curr) {
              curr -= arr[i]
              count++
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
}