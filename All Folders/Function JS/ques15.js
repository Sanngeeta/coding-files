var a=require("readline-sync")
var num=a.question("Enter the age: ")
function eligible_for_voting(num){
    if (num>=18){
        console.log("You are eligible for voting"+""+num)

    }else{
        console.log("Your are not eligible for voting"+" "+num)
    }
}
eligible_for_voting(num)