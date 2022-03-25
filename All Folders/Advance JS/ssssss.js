

let readlineSync = require("readline-sync");
var computerSaid=["rock","paper","scissors"]
var randomSaidOfComputer=computerSaid[Math.floor(Math.random()*computerSaid.length)]
  
var playerName=readlineSync.question("What is your name :")

console.log("hy"+" "+playerName)
console.log("choose any move in rock paper scissors")
var playerMov = readlineSync.question("Which move you want to do? ");
  
if (playerMov == randomSaidOfComputer){
    console.log("Match Draw");
}
else if(playerMov =="rock" && randomSaidOfComputer == "paper"){
    console.log("computer won the match");
}
else if(playerMov=="rock" && randomSaidOfComputer == "scissors"){
    console.log(playerName+" Won the match");
}
else if(playerMov=="scissors" && randomSaidOfComputer == "rock"){
    console.log("computer won the match");
}
else if(playerMov=="scissors" && randomSaidOfComputer == "paper"){
    console.log(playerName+" Won the match");
}
else if(playerMov=="paper" && randomSaidOfComputer == "rock"){
    console.log(playerName+" Won the match");
}
else if(playerMov=="paper" && randomSaidOfComputer == "scissors"){
    console.log("computer won the match");
}
  
