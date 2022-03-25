let readLine=require("readline-sync");
let userChances=readLine.questionInt("How many times do want to guess :");
let randomNumber= Math.floor(Math.random()*10);


for(let i=userChances;i>0;i--){
    console.log("You have",i,"chances only! ")
    userGuess=readLine.questionInt("Enter the number: ");
    if (userGuess==randomNumber){
        console.log("Congrest! ,Your are won")
        break
    }
    else if (userGuess<randomNumber){
        console.log("Its higher!")
    }
    else if (userGuess>randomNumber){
        console.log("Its lower!")
    }
    else if (i==1){
        consolee.log("Sorry! ,your chance are complted")
    }
}










