let num=require("readline-sync");
var day=num.question("Input your day :")
let num1=require("readline-sync");
var time=num1.question("Enter the time:")
switch(day,time){
    case "sunday":
        case "breakfast":
            console.log("Testy Dosa");
            break
    case "monday":
        case "lunch":
            console.log("dal rice")
            break
    case "tuesday":
        case "dinnr":
            console.log("bhaji and chapati")
    default:
        console.log("not found")  
}
