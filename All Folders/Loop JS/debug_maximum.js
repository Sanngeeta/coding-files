
let num=require("readline-sync");
let loop_time=num.question("Enter the loop time: ");

var max_i=0;
let list=[]
for (let i=1;i<=loop_time;i++){
   let user_input=num.question("Enter the number : ");
   list.push(user_input)
}


var max_i=list[0];
for (let j=0;j<list.length;j++){
   if (max_i<list[j]){
      [max_i=list[j]]
   }
}
console.log(max_i)