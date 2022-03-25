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
while i<len(question_list):
    print(question_list[i])
    a=0
    b=i
    while a<len(options_list[i]):
            k=options_list[b][a]
            print(a+1,k)
            a=a+1
    num=int(input("Seclect your Answer:"))
    if num==solution_list[i]:
        print("Congrats")
    else:
        print("lost")
        num1=input("Do You Want 5050 LifeLine:")
        if num1=="yes": 
            print(answer_list[b])
            num2=int(input("Chose Any one Answer:"))
            if num2==answer_list[i]:
                print("Right")
                num3=int(input("Seclect your Answer:"))
                if num3==options_list[i]:
                    yn=int(input("Chose Any one Answer:="))
                    if yn==answer_list[i]:
                        print("You Are Win")
                    else:
                        print("Incorrcet Answer")    
                else:
                    print("Wrong")
            else:
                print("wrong amswers")
        print("Chance Over:")                        


            # print("Right")

                    
        #         # if num3==solution_list[i]:
        #             print("You are win")
        #         else:
        #             ("You Are Not Win")    
        #     else:
        #         print("Wrong Answer:")   
                
        # else:
        #     print("Wrong Answer")      
            


        
            
                
           
        #     num2=int(input("Seclect your Answer:"))
        #     if num2==ans[i]:
        #         print("Correct Answer")
        #     else:
        #         print("Wrong")  
        # else:
        #     print("Go For Next")          
       
    
    i=i+1      