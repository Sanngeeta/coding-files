let num1=require("readline-sync");
var a=num1.questionInt("enter the first no :");

let num2=require("readline-sync");
var b=num2.questionInt("enter the second no :");


if (a>b){
    console.log(a,"gereter")
} else if (b>a){
    console.log(b,"gereter")
}
else{
    console.log("all are equal")
}