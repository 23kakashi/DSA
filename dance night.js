//Enter code here

function runProgram(input){
  input = input.trim().split("\n")
  
  let tc = +input[0]
  let line = 1
  
  for(let i=0; i<tc; i++) {
      let [m,n] = input[line++].trim().split(" ").map(Number)
      let hob = input[line++].trim().split(" ").map(Number)
      let hog = input[line++].trim().split(" ").map(Number)
      
      let ans = dance(m,n,hob,hog)
      console.log(ans)
  }
}

const dance = (m,n,hob,hog) => {
  if(m > n) {
      return 'NO'
  }

  hob.sort((a,b) => {return(a-b)})
  hog.sort((a,b) => {return(a-b)})
  
  for(let i=0; i<m; i++) {
      if(hob[i]<=hog[i]) {
          return 'NO'
      }
      return 'YES'  
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