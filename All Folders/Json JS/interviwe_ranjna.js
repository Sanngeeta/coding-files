
// var k=10
// console.log("your number is 1 to 15" )
// console.log("And you have only 5 chance for gussing the number")
// for (var i=1;i<=5;i++){
//     const a=require("readline-sync")
//     var num=a.question("Enter the number: ")
//     if (num==k){
//         console.log("Congrest you are won!")
//         break

//     }else if (num>k){
//         console.log("your gess is higtes-")
//         console.log("You Have Only=",5-i,"chance")


//     }else if (num<k){
//         console.log("your gess less-")
//         console.log("You Have Only=",5-i,"chance")

    
// }   else{
//     console.log(" Your loess the game!")
// }
// }



const n=require("readline-sync");
var name=n.question("Enter the name:");
var str=""

for(i=name.length-1;i>=0;i--){
    str+=name[i]
    var array=Array.from(str)
    

}

if (name===str){
    console.log(array,"It's polidrom")

}else{
    console.log(array,"It,s not a polidrom")
}

