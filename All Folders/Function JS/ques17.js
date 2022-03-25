function avrageNumber(num1,num2,num3){
    avg=num1+num2+num3/3
    console.log("Avrage of number-:",avg)
}
const input = require('readline-sync');
let number1 = input.questionInt('Enter the number1 :- ');
let number2 = input.questionInt('Enter the number2 :- ');
let number3 = input.questionInt('Enter the number3 :- ');
avrageNumber(number1,number2,number3);
