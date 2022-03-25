# # # list = [ 1, 2, 3, 4, 5, 6 ];
# # # i=0
# # # sum=0
# # # while i<len(list):
# # #     k=list[i]
# # #     sum=sum+k
# # #     i=i+1
# # # print(sum)


# # # Dic= {
# # #     1: 'NAVGURUKUL',
# # #     2: 'IN',  
# # #     3:{    
# # #             'A' : 'WELCOME',
# # #             'B' : 'To',
# # #             'C' : 'DHARAMSALA'
# # #         }
# # #     }          
# # # # del(Dic[3]["A"]) 
# # # # print(Dic)


# # # fruits = ["Banana", "Orange", "Apple", "Mango"]
# # # k = fruits.join("")
# # # print(k)

# # card=input("Insret ATM Card:")
# # if card=="debitcard" or card=="creditcard":
# #     print("Please do not Remove you card during Entire Transaction")
# #     Language=input("Please Select language:")
# #     if Language=="english":
# #         print("Proecces")
# #         pin=input("Enter 4-Digit ATM pin:")
# #         if pin=="9899":
# #             print("Your account hasbeen proescces")
# #             account=input("Select of Transaction:")
# #             if account=="cash withdrawal":
# #                 print("Inprocess")
# #                 type=input("Please Select your Account:")
# #                 if type=="saving" or type=="current" or type=="depoti":
# #                     print("Proecces")
# #                     amount=input("Enter the Amount:")
# #                     if amount>="10000":
# #                         print("Collect the Cash")
# #                         receipt=input("Take a printed receipt , if needed:")
# #                         if receipt=="yes" or receipt=="no":
# #                             print("Your Transaction Suesccsfully")
# #                         else:
# #                             print("Thnak you")   
# #                     else:
# #                         print("can't withdrawal amount more than the balance in your account.") 
# #                 else:
# #                     print("Account is not difind")  
# #             else:
# #                 print("Wrong")   
# #         else:
# #             print("Your Pin Number incorrect") 
# #     else:                   
# #         pin1=input("Apna 4 Aank ka ATM pin number Darj kare:")
# #         if pin1=="9899":
# #             print("Apka Khata Pratikiriya kar raha hai")
# #             type1=input("Apna Transaction Chuiniye:")
# #             if type1=="saving" or type1=="current" or type1=="deposit":
# #                 amount1=int(input("Apni Rashi Daliye:"))
# #                 if amount1<=10000:
# #                     print("Apka Khata Pratikriya kar raha hai")
# #                     print("Apka Cash ekhatha kijiye")
# #                     receipt1=input("Apko kya rasid chahiye:")
# #                     if receipt1=="ha" or receipt1=="nhi":
# #                         print("Apka Transaction safaltapurvak ho gaya hai")
# #                     else:
# #                         print("Thank you") 
# #                 else:
# #                     print("Apne jada Rashi chuni hai, Ek bar me aap sirf 10 hajar tak hi nikal sakte hai")     
# #             else:
# #                 print("Apka khata Paribhashit nhi ho paa raha hai")             
# #         else:
# #             print("Apka pincode number maniye nhi hai")    
# # else:
# #     print("Card is not accepted")                    
              



# # a=[1,2,1,1,3,4,4,3,5]
# # list=[]
# # i=0
# # for i in a:
# #     k=a[i]
# #     if k not in list:
# #         list.append(k)
# # print(list)



# # k=[1,2,1,1,3,4,4,3,5]
# # list=[]
# # i=0
# # while i<len(k):
# #     if k not in list:
# #         list.append(k)

# #         while a<len(list):
# #             if k[i]==k[a]:
# #                 c=c+1
# #                 c=c%2
# #             a=a+1
# #     i=i+1
# #     print(k[i],"=",c)
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

# print("! 🤟🏻😊 WELCOME    TO    KON    BANEGA    CADODRPATI😊🤟🏻 !")

# i=0
# s=0
# count=0
# while i<len(question_list):
#     print(question_list[i])
#     a=0
#     b=i
#     while a<len(options_list[i]):
#             k=options_list[b][a]
#             print(a+1,k)
#             a=a+1
             
#     num1=input("DO You Want 5050 Lifeline:-:😃")
#     if num1=="yes":
#         print("50 50 lifeline")
#         if count < 1:
#             print(answer_list[b])
#             num2=int(input("Enter your answers:👉"))
#             if num2==solution_list[i] :
#                 s+=10000
#                 print("Your Answers Correct😃✌️")
#                 print("You win🥳🤘Rs/",s)  
#             else:
#                 print("😭😤Incorect answers😭😤:")  
#                 print("You can't paly again")
#                 print("You win🥳🤘Rs/",s)
#                 break
#             count+=1
           
#         else:
#             print("You are win🥳🤘",s)
#             print("You already use lifeline:")
#             m=int(input("enter answer:"))
#             if m==solution_list[i]:
#                 print("Congres right answer☺️👇")
#                 s+=10000
#                 print("You win🥳🤘Rs/",s)
#             else:
#                 print("NO chance") 
#                 print("Your Answers is Wrong😭😤")
#                 print("You win🥳🤘Rs/",s)
#                 break
       
           
                
#     else:
#         pass 
#         k=int(input("Enter you won answer👉"))
#         if k==solution_list[i]:
#             print("Congres right answer☺️👇")
#             s+=10000
#             print("You are win✌️🥳😃Rs/",s)    
#         else:
#             print("NO chance") 
#             print("Your Answers is Wrong😭😤")
#             print("You win🥳🤘Rs/",s)
#             break
        
#     i=i+1   
         
# print("____Congrecutional you are big part of! ____KON BANEGA KARODPATI!____")     
# print("😃You are Win 😃Rs/",s)   
# print("Thank you are part of this")
           




# num=[[0],[1,3],[5,7],[23,14,33,11],[13,15,9,9,17]]
# i=0

# i=0
# k=num[0]
# n=num[0]
# while i<len(num):
#     if num[i]>k:
#         k=num[i]
#     if num[i]<n:
#         n=num[i]
    
#     i=i+1    
# print((len(k),k))
# print((len(n),n))





magic = [
    [8, 3, 4],
    [1, 5, 9],
    [6, 7, 2]
] 

i=0
s=0
while i<len(magic):
    col=0
    while col<len(magic[i]):
        s=s+magic[i][col]  
        col=col+1
    j=0
    s1=0
    while j<len(magic[i]):
        row=0
        while row<len(magic[i]):
            s1=s1+magic[i][row]
            row=row+1
        j=j+1   
    k=0
    s2=0
    while k<len(magic[i]):
        dig=0
        while dig<len(magic[i]):
            s2=s2+magic[i][dig]
            dig=dig+1
        k=k+1
    i=i+1 
print(s)       
print(s1) 
print(s2) 
if s==s1==s2:
    print("its magical squar")
else:
    print("its not magical squar ")    
  