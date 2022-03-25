let num=require("readline-sync");
var day=num.questionInt("Enter the day of no 0 to 6: ");
switch (new Date().getDay(),day) {
    case 0:
      console.log("Sunday");
      break;
    case 1:
      console.log( "Monday");
      break;
    case 2:
       console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
    default:
      console.log("plz enter the vaid no-")
  }