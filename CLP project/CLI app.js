const chalk=require('chalk')
console.log("Let's Play Game! ")
const readline=require('readline-sync')
const userName=readline.question('Enter your name:')
console.log('Welcome '+userName+": THIS GAME ABOUT GK:(general knowledge!)")
console.log()


console.log('Charles Babbage, CPU, Mahatma Gandhi, Three, Star')
console.log('--------------------------------------------------')
const questions=[{
    question:'Who is the Father of our Nation? ',
    answer:'Mahatma Gandhi'},

    {question:'Who invented Computer?',
    answer:'Charles Babbage'},{

    question:'Brain of computer is?',
    answer:'CPU'},

    {question:'Smallest state of India is? ',
    answer:'Goa'},{

    question:'Sun is a? ',
    answer:'Star'},{

    question:'How many colours are there in India’s National Flag? ',
    answer:'Three'

}]

var score=0
function GkPlayGame(question,answer){
    const userAnswers=readline.question(question)
  
        if (userAnswers.toUpperCase()===answer.toUpperCase()){
            console.log(chalk.green('Great correct!'))
            score=score+1


        }else{
            console.log(chalk.red('Opps wrong!'))
        }
        console.log(chalk.blue('Your Current Score:=',score))
        console.log()
    
}


for(i=0;i<questions.length;i++){
    var YourCurrentAnswers=questions[i]
    GkPlayGame(YourCurrentAnswers.question,YourCurrentAnswers.answer)


}

