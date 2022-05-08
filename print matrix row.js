function runProgram(input){
  input = input.trim().split("\n")
  let [n,m] = input[0].trim().split(" ").map(Number)
  let line = 1
  let mat = []
  for(let i=0; i<n; i++) {

      let temp = input[line++].trim().split(" ").map(Number)
      mat.push(temp)
  }
  // console.log(mat)
  even(mat)
}

const even = (mat) => {
  for(let i=0; i<mat.length; i++) {
      if(i%2 === 0) {
          let bag = ""
          for(let j=0; j<mat[0].length; j++) {
              bag += mat[i][j] + " "
          }
          console.log(bag)
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