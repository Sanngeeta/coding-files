const question_list = [
    "How many continents are there?",              
    "What is the capital of India?",            
    "NG mei kaun se course padhaya jaata hai?"  
]

const options_list = [
    ["Four", "Nine", "Seven", "Eight"],
    ["Chandigarh", "Bhopal", "Chennai", "Delhi"],
    ["Software Engineering", "Counseling", "Tourism", "Agriculture"]
]
const solution_list = [3, 4, 1] 

const answer_list=[

    ["Four", "Seven"],
    ["Delhi", "Bhopal"],
    ["Agriculture","Sofware Engineering"]
]
const Lifeline=[2,1,2]

console.log("WELCOME TO KON BANEGA CADODRPATI!_")
var s=0
var count=0
for (i=0;i<question_list.length;i++){
    console.log(question_list[i])
    var b=i
    for (var a=0;a<options_list[i].length;a++){
        var k=options_list[b][a]
        console.log(a+1,k)
    }
        if (count<1){
            var user=require("readline-sync");
            var num=user.question("DO You Want 5050 Lifeline:-:😃")  
            if (num=="yes"){
                for(var k=0;k<answer_list[i].length;k++){
                    console.log(k+1,answer_list[b][k])}
                var num2=user.question("Enter your answers:👉")
                if (num2==solution_list[i] ||num2==Lifeline[i]){
                    s+=25000
                    console.log("Your Answers Correct😃✌️")
                    console.log("You win🥳🤘Rs/",s)
                
                }else {
                    console.log("😭😤Incorect answers😭😤:")  
                    console.log("You can't paly again")
                    console.log("You win🥳🤘Rs/",s)
                    break;}
                count+=1
            


            }else{
                console.log("You are win🥳🤘",s)
                var m=user.question("Enter the answer: ")
                if (m==solution_list[i]||num2==Lifeline[i]){
                    console.log("Congres right answer☺️👇")
                    s+=25000
                    console.log("You win🥳🤘Rs/",s)

                }else{
                    console.log("Sorry you don't have cahnce!")
                    console.log("Your Answers is Wrong😭😤")
                    console.log("You win🥳🤘Rs/",s)
                    break;}
                }
                
        }else{
            var k=user.question("Enter you won answer👉")
            if (k==solution_list[i]||num2==Lifeline[i]){
                console.log("Congres right answer☺️👇")
                s+=25000
                console.log("You are win✌️🥳😃Rs/",s)

            }else{
                console.log("NO chance!")
                console.log("Your Answers is Wrong😭😤")
                console.log("You win🥳🤘Rs/",s)
                break;
            }

            
        }
}        
console.log("Congratulation you are big part of!..KON BANEGA KARODPATI!..")     
console.log("You are Win Rs/",s)   
console.log("Thank you are part of this")
           
