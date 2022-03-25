



question_list = [
    "How many continents are there?",              
    "What is the capital of India?",            
    "NG mei kaun se course padhaya jaata hai?"  
]

options_list = [
    ["Four", "Nine", "Seven", "Eight"],
    ["Chandigarh", "Bhopal", "Chennai", "Delhi"],
    ["Software Engineering", "Counseling", "Tourism", "Agriculture"]
]
solution_list = [3, 4, 1] 

answer_list=[
    ["(1) Four", "(3) Seven"],
    ["(4) Delhi", "(2) Bhopal"],
    ["(4) Agriculture","(1) Sofware Engineering"]
]

i=0
c=0
s=0
while i<len(question_list):
    print(question_list[i])
    a=0
    b=i
    while a<len(options_list[i]):
            k=options_list[b][a]
            print(a+1,k)
            a=a+1
          
    num=int(input("Seclect your Answer:"))
    ny=input("Are you soure about your answer:")
    if ny=="no":
        print("Oky")
        num1=input("Do you Want lifeline:")
        if num1=="yes":
            t=int(input("enter your lifeline:"))
            if t==5050:
                print("Okey")
                print(answer_list[b])
                num2=int(input("Choose any one:"))
                if num2==solution_list[i] :
                    s+=10000
                    print("Your Answers Correct")
                    print("You win",s)
                else:
                    print("Your answer incorrect")
                    print("You win",s)
                    break
            else:
                print("Can't use again lifeline")
                
        else:
            num4=int(input("Seclect your Answer:"))
            if num4==solution_list[i]:
                print("Congres right answer")
                s+=1000000
                print("you win",s)
            else:
                print("Answers wrong")
                print("cance over")    
                break
    i=i+1




