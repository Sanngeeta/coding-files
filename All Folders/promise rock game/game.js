const name=require("readline-sync")
// var playerName=name.question("What is your name :")
// console.log("hy"+" "+playerName)

let readlineSync = require("readline-sync");
var computerSaid=["rock","paper","scissors"]
var randomSaidOfComputer=computerSaid[Math.floor(Math.random()*computerSaid.length)]
console.log("choose any move in rock paper scissors")
var playerMov = readlineSync.question("Which move you want to do? ");

var promise = new Promise(function(resolve, reject) {
        
        if (playerMov == randomSaidOfComputer){
            console.log("Match Draw")
          }
        else if(playerMov =="rock" && randomSaidOfComputer == "paper"){
            resolve()

        }
        else if(playerMov=="rock" && randomSaidOfComputer == "scissors"){
            resolve()

        }
        else if(playerMov=="scissors" && randomSaidOfComputer == "rock"){
            resolve()
        }

})
        var promise2=new Promise(function(resolve,reject){
        if(playerMov=="scissors" && randomSaidOfComputer == "paper"){

            reject()

        }
        else if(playerMov=="paper" && randomSaidOfComputer == "rock"){
            reject()

        }
        else if(playerMov=="paper" && randomSaidOfComputer == "scissors"){
            reject()

        }

        
})

promise.
    then(function () {
        console.log('You Win');
    }).
    catch(function () {
        console.log('Some error occured');
    });



promise2.
    then(function(){
        console.log('You lose')
    }).catch(function(){
        console.log('Some error occured')
    })















