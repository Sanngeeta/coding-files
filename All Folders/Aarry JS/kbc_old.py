# const question_list = [
# //     "How many continents are there?",              
# //     "What is the capital of India?",            
# //     "NG mei kaun se course padhaya jaata hai?"  
# // ]

# // const options_list = [
# //     ["Four", "Nine", "Seven", "Eight"],
# //     ["Chandigarh", "Bhopal", "Chennai", "Delhi"],
# //     ["Software Engineering", "Counseling", "Tourism", "Agriculture"]
# // ]
# // const solution_list = [3, 4, 1] 

# // const answer_list=[
# //     ["(1) Four", "(3) Seven"],
# //     ["(4) Delhi", "(2) Bhopal"],
# //     ["(4) Agriculture","(1) Sofware Engineering"]
# // ]

# // console.log("🤟🏻😊 WELCOME TO KON BANEGA CADODRPATI😊🤟🏻")

# // var i=0
# // var s=0
# // var count=0
# // while (i<question_list.length){
# //     console.log(question_list[i])
# //     var a=0
# //     var b=i
# //     while (a<options_list[i].length){
# //             k=options_list[b][a]
# //             console.log(a+1,k)
# //             a++
# //     }
# //     var  user=require("readline-sync");     
# //     var num1=user.question("DO You Want 5050 Lifeline:-:😃")
# //     if (num1=="yes"){
# //         console.log("50 50 lifeline")
# //         if (count < 1){
# //             count++
# //             console.log(answer_list[b])
# //             var num2=user.question("Enter your answers:👉")
# //             if (num2==solution_list[i] ){
# //                 s+=10000
# //                 console.log("Your Answers Correct😃✌️")
# //                 console.log("You win🥳🤘Rs/",s)  
# //             }else{
# //                 console.log("😭😤Incorect answers😭😤:")  
# //                 console.log("You can't paly again")
# //                 console.log("You win🥳🤘Rs/",s)}
# //                 break
# //             // count++
        

# //         }else{
# //             console.log("You are win🥳🤘",s)
# //             console.log("You already use lifeline:")
# //             var m=user.question("enter answer:")
# //             if (m==solution_list[i]){
# //                 console.log("Congres right answer☺️👇")
# //                 s+=10000
# //                 console.log("You win🥳🤘Rs/",s)
# //             }else{
# //                 console.log("NO chance") 
# //                 console.log("Your Answers is Wrong😭😤")
# //                 console.log("You win🥳🤘Rs/",s)
# //                 break}
       
# //         }    
                
# //     }else{ 
# //         var k=user.question("Enter you won answer👉");
# //         if (k==solution_list[i]){
# //             console.log("Congres right answer☺️👇")
# //             s+=10000
# //             console.log("You are win✌️🥳😃Rs/",s)    
# //         }else{
# //             console.log("NO chance") 
# //             console.log("Your Answers is Wrong😭😤")
# //             console.log("You win🥳🤘Rs/",s)
# //             break
# //         }
# //     i++
         


# //     }

# // }
# // console.log("Thank you and you are big part of!...KON BANEGA KARODPATI!...")     
# // console.log("You are Win Rs/",s)   
# // console.log("Thank you are part of this")
           



   



magic = [
    [8, 3, 4],
    [1, 5, 9],
    [6, 7, 2]
] 

i=0
s=0
while i<len(magic):
    col=0
    while col<len(magic):
        s=s+magic[i][col]  
        col=col+1
    j=0
    s1=0
    while j<len(magic):
        row=0
        while row<len(magic):
            s1=s1+magic[i][row]
            row=row+1
        j=j+1   
        k=0
        s2=0
        while k<len(magic):
            dig=0
            while dig<len(magic):
                s2=s2+magic[i][dig]
                dig=dig+1
            k=k+1
    i=i+1        
print(s1) 
print(s)   
print(s2) 
if s==s1==s2:
    print("its magical squar")
else:
    print("its not magical squar ")    
  
















