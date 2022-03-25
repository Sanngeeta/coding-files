# new=input("DO YOU WANT TO SING IN :") 
# f=open("userdetails.json","r+")
# name=f.read()
# list3=[]
# main_list=[]
# dic={}
# i=0
# while i<=1:
#     if i==1:
#         break         
#     if new=="yes":
#         username=input("ENTER THE USERNAME :")
#         print("USER NAME CONFIRMED !!!!")
#         print("PASWORD LENGTH SHOULD BE GRETER THAN 6,IT SHOULD CONTAIN SPECIAL CHARECTER,CAPITAL ALPHABET AND NUMERICAL")
#         password=input("ENTER THE PASSWORD :")
#         if len(password)>6 and len(password)<10:
#             if "@" or "$" or "#" in password:
#                 if not password.isupper():
#                     if not password.isdigit():
#                         password2=input("CONFIRM YOUR PASSWORD ")
#                         if password==password2:
#                             print("PASSWORD CONFIRMED")
#                         else:
#                             print("RENTERED PASSWORD IS INCORRECT")  
#                             break
#                     else:
#                         print("NUMERICALS ARE NOT PRESENT") 
#                         break 
#                 else:
#                     print("CAPITAL ALPHSABETS ARE NOT PRESENT")
#                     break
#             else:
#                     ("PLEASE ADD SPECIAL CHARECTERS") 
#                     break
#         else:
#             ("LENGTH SHOULD BE ATLEASTT 10") 
#             break     
            
#         list1=["USERNAME","PASSWORD"]
#         list2=[username,password]    
#         i=0
#         while i<=1:
#             list3.append((list1[i],list2[i]))
#             i=i+1
#         dic.update(list3)
#         if username in name:
#             print("SORRY YOUR USERNAME ALREADY EXIST ")
#         else:
#             main_list.append(dic)
#             print("CONGRACTS!!!!"+username+"YOU ARE SIGNED UP SUCESSFULLY")
#             print("NOW YOU NEED TO FILL THE FOLLOWING DETAILS ")
#             firstname=input("YOUR FIRST NAME :") 
#             lastname=input("YOUR LAST NAME :")
#             bd=input("YOUR DATE OF BIRTH :")
#             gender=input("GENDER :")
#             list4=["FIRST NAME","LAST NAME","DATE OF BIRTH","GENDER"] 
#             list5=[firstname,lastname,bd,gender]
#             j=0
#             while j<len(list4):
#                 list3.append((list4[j],list5[j]))
#                 j=j+1
#             dic.update(list3)
#             final_dic={}
#             final_list=[]
#             final_list.append(("user",dic))
#             final_dic.update(final_list)
#             json.dump(final_dic,f,indent=2)
#     if new=="no":
#         print("AS YOU WISH!!!!!!")        
    
#     i=i+1



num=input("Enter your name:")
i=0
while i<len(num):
    print(num.upper()[i]+num.lower()[i]*(i),end="")
    if i!=len(num)-1:
        print("+",end="")

    i=i+1