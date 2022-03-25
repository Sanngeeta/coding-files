let num=require("readline-sync");
var primeNumber=num.question("Enter the number:");
let i=2;
var count=0
while (i<primeNumber){
    if (primeNumber%i===0){
        count=count+1
    }
    i++;
}
if (count===0){
    console.log(primeNumber,"its prime no")
    // console.log(typeof primeNumber) type string
}
else{
    console.log(primeNumber,"its not prime")
}


