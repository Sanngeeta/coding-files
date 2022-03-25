console.log("Let's Pay Game! ")
const input=require('readline-sync')
const palyre=input.question('Enter your name- ')
console.log('Welcome '+palyre+" Do YoU kHoWn Sangeeta? ")
var score=0

function palyGame(question,answer){
  const userAnswer=input.question(question)
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log('Rigth answer!')
    score=score+1
  }else {
    console.log('Wrong answer!')
  }
  console.log('-------------')
  console.log('Your current score:-',score)
}
    
questions=[{
  question:'Where I do live? ',
  answer:'delhi',
  
},{
  question:'My favorite hero would be? ',
  answer:'salman khan'
},{
  question:'My favorite food would be? ',
  answer:'chicken'
},{
  question:'Where I do study? ',
  answer:'navgurukul'
},{
  question:'My favorite colour would be? ',
  answer:'black'
},{
  question:'My favorite place would be? ',
  answer:'delhi'
}]

for(i=0;i<questions.length;i++){
  var currentQuestion=questions[i]
  palyGame(currentQuestion.question, currentQuestion.answer)
  
  
}

console.log('YAY! You SCORED:',score)
console.log('I HOPE YOU ENJOYED GAME ')