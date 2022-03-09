//Enter code here
function runProgram(input){
   reduceStr(input)
}

function reduceStr(str){
   var stack = []
   for(var i=0;i<str.length;i++){
       stack.push(str[i])
       if(stack[stack.length-2]==stack[stack.length-1]){
           stack.pop()
           stack.pop()
       }
   }
   if(stack.length == 0){
       console.log("Empty String")
   }
   else{
       console.log(stack.join(""))
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