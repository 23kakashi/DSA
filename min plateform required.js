//Enter code here

function runProgram(input){
  input = input.trim().split("\n")
  
  let n = +input[0]
  let arrival = input[1].trim().split(" ")
  let departure = input[2].trim().split(" ")
  
  // this is O(n) as inside loop can
  for(let i=0; i<n; i++) {
      let bagA = ""
      let bagD = ""
      let elA = arrival[i]
      let elD = departure[i]
      for(let j=0; j<elA.length; j++) {
          if(elA[j] != ':') {
              bagA += elA[j]
          }
      }
      for(let j=0; j<elD.length; j++) {
          if(elD[j] != ':') {
              bagD += elD[j]
          }
      }
      arrival[i] = Number(bagA)
      departure[i] = Number(bagD)
  }
  
  arrival.sort((a,b) => {return a-b})
  departure.sort((a,b) => {return a-b})
  
  train(n,arrival, departure)
}

const train = (n, arr, dep) => {
  let platform = 0
  let max = 0
  
  let enter = 0
  let exit = 0

  while(enter < n && exit < n) {
      if(arr[enter] <= dep[exit]) {
          platform++
          enter++
      }
      
      else if(arr[enter] > dep[exit]) {
          platform--
          exit++
      }
      if(max < platform) {
          max = platform
      }
  }
  console.log(max)
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