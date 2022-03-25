def question():
    
    question_list = [
        "How many continents are there?",              
        "What is the capital of India?",            
        "NG mei kaun se course padhaya jaata hai?"  
    ]
    return question_list
question_value= question()
def options():
    options_list = [
            ["Four", "Nine", "Seven", "Eight"],
            ["Chandigarh", "Bhopal", "Chennai", "Delhi"],
            ["Software Engineering", "Counseling", "Tourism", "Agriculture"]
        ]
    return options_list
options_value=options()

def solution():
        
    solution_list = [3, 4, 1] 
    return solution_list
salution_value=solution()

def answers():

        answer_list=[
            ["1 Four", "3 Seven"],
            ["2 Bhopal 4 Delhi"],
            ["1 Sofware Engineering, 4 Agriculture"]
        ]
        return answer_list
answers_value=answers()

print("! 🤟🏻😊 WELCOME    TO    KON    BANEGA    CADODRPATI😊🤟🏻 !")

i=0
s=0
count=0
while i<len(question_value):
    print(question_value[i])
    a=0
    b=i
    while a<len(options_value[i]):
            k=options_value[b][a]   
            print(a+1,k)
            a=a+1
    if count < 1:           
        num1=input("DO You Want 5050 Lifeline:-:😃")
        if num1=="yes":
            k=0
            while k<len(answers_value[i]):
                print(answers_value[b][k])
                k+=1
            num2=int(input("Enter your answers:👉"))
            if num2==salution_value[i] :
                s+=10000
                print("Your Answers Correct😃✌️")
                print("You got Ammount🥳🤘Rs/",s)
                    

            else:
                print("😭😤Incorect answers😭😤:")  
                print("You can't paly again")
                print("You got Ammount🥳🤘Rs/",s)
                break
            count+=1
            
        else:
            pass
            m=int(input("enter answer:"))
            if m==salution_value[i]:
                print("Congres right answer☺️👇")
                s+=10000
                print("You win🥳🤘Rs/",s)
            else:
                print("NO chance") 
                print("Your Answers is Wrong😭😤")
                print("You got Ammount🥳🤘Rs/",s)
                break
    else:
        pass 
        k=int(input("Enter you won answer👉"))
        if k==salution_value[i]:
            print("Congres right answer☺️👇")
            s+=10000
            print("You got Ammount🥳🤘Rs/",s)
        else:
            print("NO chance") 
            print("Your Answers is Wrong😭😤")
            print("You got Ammount🥳🤘Rs/",s)
            break
            
    i=i+1   
            
    print("Congrecutional you are big part of!...KON BANEGA KARODPATI!...")     
    print("😃You are Win 😃Rs/",s)   
    print("THANK YOU FOR PART OF THIS")
        


