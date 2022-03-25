let nam=require("readline-sync");
var a=nam.questionInt("Enter the 0 to 11 any no :");
switch (new Date().getMonth(),a){
    case 0:
       console.log("junary")
       break;
    case 1:
        console.log("febury")
        break;
    case 2:
        console.log("march")
        break;
    case 3:
        console.log("april")
        break;
    case 4:
        console.log("may")
        break;
    case 5:
        console.log("june")
        break;
    case 6:
        console.log("julye")
        break;
    case 7:
        console.log("agust")
        break;;
    case 8:
        console.log("sptember")
        break;
    case 9:
        console.log("october")
        break;
    case 10:
        console.log("nabmuber")
        break;
    case 11:
        console.log("disumber")

    default:
        console.log("enter vaild no-")
}