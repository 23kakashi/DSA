//Enter code here
function runProgram(input){
  input = input.trim().split("\n")
  
  let k = +input[0]
  let arrival = input[1].trim().split(" ").map(Number)
  let departure = input[2].trim().split(" ").map(Number)
  
  arrival.sort((a,b) => {return a-b})
  departure.sort((a,b) => {return a-b})
  
  parking(k,arrival,departure)
}

const parking = (k,arr,dep) => {
  let n = arr.length
  let slot = 0
  let max = 0
  
  let enter = 0
  let exit = 0

  while(enter < n && exit < n) {
      if(arr[enter] <= dep[exit]) {
          slot++
          enter++
      }
      
      else if(arr[enter] > dep[exit]) {
          slot--
          exit++
      }
      if(max < slot) {
          max = slot
      }
  }
  if(max <= k) {
      console.log("Possible")
  } else {
      console.log("Not Possible")
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