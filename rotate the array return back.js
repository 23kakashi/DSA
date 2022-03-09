//Enter code here
function runProgram(input){
   input = input.trim().split("\n")
   var tc = +input[0]
   var line = 1 
   for(var i=0;i<tc;i++){
       var x = input[line].trim().split(" ").map(Number)
       var [n,k] = [x[0],x[1]]
       line++
       var arr = input[line].trim().split(" ").map(Number)
       line++
       rotate(n,k,arr)
   }
}

function rotate(n,k,arr){
   k = k%n
   for(var i=0;i<k;i++){
       var temp = arr[n-1]
       arr.pop()
       arr.unshift(temp)
   }
   console.log(arr.join(" "))
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