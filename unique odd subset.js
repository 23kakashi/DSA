//Enter code here
function runProgram(input){
  input = input.trim().split("\n")
  let n = +input[0] 
  let arr = input[1].trim().split(" ").map(Number)
  let k = +input[2]
  
  arr.sort((a,b) => {return a-b})
      
  subset(n,k,arr)
  
}

const subset = (n,k,arr) => {
  for(let i=0; i<=n-k; i++) {
      let bag = []
      for(let j=i; j<n; j++) {
          bag.push(arr[j]) 
          
          if(bag.length >= k) {
              // console.log(bag)
              
              let sum = 0
              for(let x of bag) {
                  sum += x
              }
              if(sum % 2 !== 0) {
                  let ans = distinct(bag,k)
                  // console.log(flag)
      
                  if(ans) {
                      console.log("True")
                  return
                  }
              }
          }
      }
      
  }
  console.log("False")
}


const distinct = (bag,k) => {
  let count = 1
  for(let i=0; i<k; i++) {
      // console.log(bag[i], bag[i+1])
      if(bag[i] !== bag[i+1]) {
          count++
      }
  }
  // console.log(count)
  if(count >= k) {
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