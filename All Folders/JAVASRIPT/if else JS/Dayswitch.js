//Kritika  and Amisha  can you guys understand this code and do same without if else in it//
let newDay=require("readline-sync");
var day=newDay.question("Enter your day :")
switch(day){
    case "sunday":
        console.log("rice")
        break;
    case "monday":
        console.log("chapti")
        break;
    case "tuesday":
        console.log("bhaji")
        break;
    case "wednesday":
        console.log("dal");
        break
    case "thursday":
        console.log("sweets");
        break
    case "friday":
        console.log("jues");
        break
    case "saturday":
        console.log("fruits");
        break
    default:
        console.log("Please take vaild day")
}

