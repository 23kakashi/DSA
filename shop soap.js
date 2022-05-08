function runProgram(input){
  input = input.trim().split("\n")
  
  let n = +input[0]
  let arr = input[1].trim().split(" ").map(Number)
  let q = +input[2]
  let line = 3
  arr.sort((a,b) => {return a-b})
  for(let i=0; i<q; i++) {
      let amount = +input[line++]
      let ans = soap(n,arr,amount)
      console.log(ans)
  }
}

const soap = (n,arr,amount) => {
  if(amount > arr[n-1] ) {
      return n
  }
  if(arr[0] >= amount) {
      return 0
  }
  
  let start = 0
  let end = n-1
  
  while(start <= end) {
      
      let mid = start + Math.floor((end - start)/2)
      
      if(arr[mid] === amount) {
          if(arr[mid - 1] === amount) {
              end = mid - 1
          } else {
              return mid
          }
      }
      
      if(arr[mid] < amount) {
          if(arr[mid + 1] > amount) {
              return (mid + 1)
          } else {
              start = mid + 1
          }
      }
      
      if(arr[mid] > amount) {
          if(arr[mid - 1] < amount) {
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
}