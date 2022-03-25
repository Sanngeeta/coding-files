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

print("! 🤟🏻😊 WELCOME    TO    KON    BANEGA    CADODRPATI😊🤟🏻 !")

i=0
s=0
count=0
while i<len(question_list):
    print(question_list[i])
    a=0
    b=i
    while a<len(options_list[i]):
            k=options_list[b][a]
            print(a+1,k)
            a=a+1
             
    num1=input("DO You Want 5050 Lifeline:-:😃")
    if num1=="yes":
        print("50 50 lifeline")
        if count < 1:
            print(answer_list[b])
            num2=int(input("Enter your answers:👉"))
            if num2==solution_list[i] :
                s+=10000
                print("Your Answers Correct😃✌️")
                print("You win🥳🤘Rs/",s)  
            else:
                print("😭😤Incorect answers😭😤:")  
                print("You can't paly again")
                print("You win🥳🤘Rs/",s)
                break
            count+=1
           
        else:
            # print("You are win🥳🤘",s)
            print("You already use lifeline:")
            m=int(input("enter answer:"))
            if m==solution_list[i]:
                print("Congres right answer☺️👇")
                s+=10000
                print("You win🥳🤘Rs/",s)
            else:
                print("NO chance") 
                print("Your Answers is Wrong😭😤")
                print("You win🥳🤘Rs/",s)
                break
       
           
                
    else:
        pass 
        k=int(input("Enter you won answer👉"))
        if k==solution_list[i]:
            print("Congres right answer☺️👇")
            s+=10000
            print("You are win✌️🥳😃Rs/",s)    
        else:
            print("NO chance") 
            print("Your Answers is Wrong😭😤")
            print("You win🥳🤘Rs/",s)
            break
        
    i=i+1   
         
print("____Congrecutional you are big part of! ____KON BANEGA KARODPATI!____")     
print("😃You are Win 😃Rs/",s)   
print("Thank you are part of this")
           




















































































    
     































# question_list = [
#     "How many continents are there?",              
#     "What is the capital of India?",            
#     "NG mei kaun se course padhaya jaata hai?"  
# ]

# options_list = [
#     ["Four", "Nine", "Seven", "Eight"],
#     ["Chandigarh", "Bhopal", "Chennai", "Delhi"],
#     ["Software Engineering", "Counseling", "Tourism", "Agriculture"]
# ]
# solution_list = [3, 4, 1] 

# answer_list=[
#     ["(1) Four", "(3) Seven"],
#     ["(4) Delhi", "(2) Bhopal"],
#     ["(4) Agriculture","(1) Sofware Engineering"]
# ]

# i=0
# c=0
# s=0
# while i<len(question_list):
#     print(question_list[i])
#     a=0
#     b=i
#     while a<len(options_list[i]):
#             k=options_list[b][a]
#             print(a+1,k)
#             a=a+1
          
#     # num=int(input("Seclect your Answer:"))
#     ny=input("Are you soure about your answer:")
#     if ny=="no":
#         print("Oky")
#         num1=input("Do you Want lifeline:")
#         if num1=="yes":
#             t=int(input("enter your lifeline:"))
#             if t==5050:
#                 print("Okey")
#                 print(answer_list[b])
#                 c+=1
#                 num2=int(input("Choose any one:"))
#                 if num2==solution_list[i] :
#                     s+=10000
#                     print("Your Answers Correct")
#                     print("You win",s)
#                 else:
#                     print("Your answer incorrect")
#                     print("You win",s)
#                     break
#             else:
#                 print("Can't use again lifeline")
#                 num=int(input("Seclect your Answer:"))
#         else:
#             if num==solution_list[i]:
#                 print("Congres right answer")
#                 s+=1000000
#                 print("you win",s)
#     i=i+1













#         # else:
#         #     num=int(input("enter your answers:"))   
                     
                   

            




#     # if solution_list[i]:
#     #     num1=input("Do You Want 5050 LifeLine:")
#     #     if num1=="yes": 
#     #         print(answer_list[b])
#     #         yn=int(input("Choose Any one:"))
#     #         if yn==solution_list[i]:
#     #             print("Cngrotulation") 
#     #         else:
#     #             print("Lost") 
#     #     else:
#     #         num2=int(input("Select Your Answers="))  
#     #         if  num2==solution_list[i]:
#     #             print("Cngrotulation You Got ") 
#     #         else:
#     #             print("Lost game") 
#     #             if num2==solution_list[i]:
#     #                 print("You Are Win")
#     #             else:
#     #                 print("Chance over")    
    










# #         #     if num2==answer_list[i]:
# #         #         print("Right")
# #         #         num3=int(input("Seclect your Answer:"))
# #         #         if num3==options_list[i]:
# #         #             yn=int(input("Chose Any one Answer:="))
# #         #             if yn==answer_list[i]:
# #         #                 print("You Are Win")
# #         #             else:
# #         #                 print("Incorrcet Answer")    
# #         #         else:
# #         #             print("Wrong")
# #         #     else:
# #         #         print("wrong amswers")
# #         # print("Chance Over:")                        


# #         #     # print("Right")

                    
# #         #         # if num3==solution_list[i]:
# #         #             print("You are win")
# #         #         else:
# #         #             ("You Are Not Win")    
# #         #     else:
# #         #         print("Wrong Answer:")   
                
# #         # else:
# #         #     print("Wrong Answer")      
            


        
            
                
           
#         #     num2=int(input("Seclect your Answer:"))
#         #     if num2==ans[i]:
#         #         print("Correct Answer")
#         #     else:
#         #         print("Wrong")  
#         # else:
#         #     print("Go For Next")          
       
    
#     i=i+1      