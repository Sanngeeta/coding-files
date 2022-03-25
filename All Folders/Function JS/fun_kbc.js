function question(){
    const question_list = [
        "How many continents are there?",              
        "What is the capital of India?",            
        "NG mei kaun se course padhaya jaata hai?"  
    ]
    return question_list

}
questionValue=question()

function options(){ 
    const options_list = [
        ["Four", "Nine", "Seven", "Eight"],
        ["Chandigarh", "Bhopal", "Chennai", "Delhi"],
        ["Software Engineering", "Counseling", "Tourism", "Agriculture"]
    ]
    return options_list
}
optionsValue=options()

function solution(){ 
const solution_list = [3, 4, 1] 
return solution_list
}
solutionValue=solution()

function answer(){ 
const answer_list=[
        ["Four", "Seven"],
        ["Delhi", "Bhopal"],
        ["Agriculture","Sofware Engineering"]
    ]
    return answer_list
}

answerValue=answer()

function lifeline(){
    const life=[2,1,2]
return life
}
newlife=lifeline()


console.log("WELCOME TO KON BANEGA CADODRPATI!_")
var s=0
var count=0
for (i=0;i<questionValue.length;i++){
    console.log(questionValue[i])
    var b=i
    for (var a=0;a<optionsValue[i].length;a++){
        var k=optionsValue[b][a]
        console.log(a+1,k)
    }
        if (count<1){
            var user=require("readline-sync");
            var num=user.question("DO You Want 5050 Lifeline:-:😃")  
            if (num=="yes"){
                for(var k=0;k<answerValue[i].length;k++){
                    console.log(k+1,answerValue[b][k])}
                var num2=user.question("Enter your answers:👉")
                if (num2==solutionValue[i]||num2==newlife[i]){
                    s+=25000
                    console.log("Your Answers Correct😃✌️")
                    console.log("You are Win",s,"/-Rs")
                }else {
                    console.log("😭😤Incorect answers😭😤:")  
                    console.log("You can't paly again")
                    console.log("You are Win",s,"/-Rs")
                    break;}
                count+=1
            


            }else{
                var m=user.question("Enter the answer: ")
                if (m==solutionValue[i]||m==newlife[i]){
                    console.log("Congres right answer☺️👇")
                    s+=25000
                    console.log("You are Win",s,"/-Rs")

                }else{
                    console.log("Sorry you don't have cahnce!")
                    console.log("Your Answers is Wrong😭😤")
                    break;}
                }
                
        }else{
            var k=user.question("Enter you won answer👉")
            if (k==solutionValue[i]||k==newlife[i]){
                console.log("Congres right answer☺️👇")
                s+=25000
                console.log("You are Win",s,"/-Rs")
                break

            }else{
                console.log("NO chance!")
                console.log("Your Answers is Wrong😭😤")
                console.log("You are Win",s,"/-Rs")
                break;
            }

            
        }
}        
console.log("Congratulation you are big part of!..KON BANEGA KARODPATI!..")     
console.log("You are Win",s,"/-Rs")   
console.log("Thank you are part of this")
        //    2500/-RS
