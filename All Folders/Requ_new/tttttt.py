
import requests
import json

saral=requests.get("http://saral.navgurukul.org/api/courses" )
data=saral.json()
with open("Cild_Data.json","w") as file:
    json.dump(data,file,indent=4)
serial=0
for i in data["availableCourses"]:
    print(serial+1,i["name"],(" id:= "),i["id"])
    serial+=1
print(" ")
couser_no=int(input("What Course Do You Want Plase Enter of Number of cousre:-"))
id=data["availableCourses"][couser_no-1]["id"]
name=data["availableCourses"][couser_no-1]["name"]
print(name)


child_Exercise=requests.get("http://saral.navgurukul.org/api/courses/"+data ["availableCourses"][couser_no-1]["id"]+" "+"/exercises")
data_2=child_Exercise.json()
with open("Parnts_Data.json","w") as file2:
    json.dump(data_2,file2,indent=4)

index=0
for i in data_2["data"]:
    print(index+1,i["name"])
    index+=1
print(" ")


# index=0
# for i in data_2["data"]:
#     print("  ",index+1,i["name"])
    
#     if data_2["data"][index]["childExercises"]==[]:
#         slug=i["slug"]
#         print("Slug:-",slug)
#     else:
#         n=1
#         for question in range(len(data_2["data"][index]["childExercises"])):
#             print(" ",n,data_2["data"][index]["childExercises"][question]["name"])
#             n+=1
#     index+=1
# print(" ")
data=data_2["data"]
for j in data:
    s1=1
    child=j["childExercises"]
    for index2 in child:
        s1+=1


inside_question=int(input("Enter the the question no:- "))-1
if data_2["data"][inside_question]["childExercises"]==[]:

    print(data_2["data"][inside_question]["name"])
    print(data_2["data"][inside_question]["slug"])
else:
    print(" ")
    k=1
    list=[]
    for num in range(len(data_2["data"][inside_question]["childExercises"])):
        list.append(num)
   
        print(" ",k,data_2["data"][inside_question]["childExercises"][num]["name"])
        k+=1
    for i in range(len(list)):

        slug= int(input("WHICH QUESTION DO YOU WANT:-"))-1
        slugid=child[slug]["id"]
        ChildSlugName=child[slug]["slug"]

    # slug=data_2["data"][inside_question-1]["childExercises"][num]["slug"]

        slugdata=requests.get("http://saral.navgurukul.org/api/courses/"+str(data)["data"][slug-1]["childExercises"]+"/exercise/")
        data_3=slugdata.json()
        with open("Content_data.json","w") as file_2:
            json.dump(data_3,file_2,indent=4)
            print(data_3["content"])
            break
            























#         list1.append(data_3["content"])
# quetion1=int(input("enter the quetions"))
# list1.append(quetion1)
# quetion1=quetion1-1
# print(list[quetion1])

# # #   


#  content=requests.get("http://saral.navgurukul.org/api/courses"+str("id")+"/exercise/getBySlug?slug="+slug)




























        # for i in range (len(questionlist1)) :
        #     a=input("DO YOU WANT TO GO NEXT(n)/PREVIOUS(p)")
        #     if a=="n":
        #         slug=int(input("WHICH QUESTION DO YOU WANT?? ......."))
        #         slugid=Child[slug]["id"]
        #         ChildSlugName=Child[slug]["slug"]
        #         slugdata=requests.get("http://saral.navgurukul.org/api/courses/"+slugid+"/exercise/getBySlug?slug="+str(ChildSlugName))
        #         data8=slugdata.json()
        #         with open("slugdata","w") as file:
        #             json.dump(data8,file,indent=8)
        #             print(data8["content"])   
        #     elif a=="p":
        #         slug=int(input("WHICH QUESTION DO YOU WANT?? ......."))
        #         slugid=Child[slug]["id"]
        #         ChildSlugName=Child[slug-1]["slug"]
        #         slugdata=requests.get("http://saral.navgurukul.org/api/courses/"+slugid+"/exercise/getBySlug?slug="+str(ChildSlugName))
        #         data8=slugdata.json()
        #         with open("slugdata","w") as file:
        #             json.dump(data8,file,indent=8)
        #             print(data8["content"])     

























# index=0
# new_data3=data_2["data"]
# for index2 in new_data3:
#     print(index+1,index2["name"])
#     index+=1
    
# user=int(input("Which question no you want:-"))
# Data=data_2["data"][user-1]["childExercises"]
# index5=1
# question=[]
# for index6 in Data:
#     question.append(index6)
#     print(" ",index5,index6["name"]) 
#     index5+=1

# for k in range(len(data_2["data"])):
#     s=1
#     if data_2["data"][k]["childExercises"]==[]:
#         print(" ",s,data_2["data"][k]["slug"])
#         s+=1
#     else:
#         n=1
#         for question in range(len(data_2["data"][k]["childExercises"])):
#             print(" ",n,data_2["data"][k]["childExercises"][question]["name"])
#             n+=1




# slug=int(input("Enter the question:-"))
# Data_n=data_2["data"][slug-1]["childExercises"]







# child_data=data_2["data"]
# for index2 in child_data:  
#     print(index,index2,["name"])
#     index+=1
#     i=1
#     if index2["childExercises"]==[]:
#         print(" ",i,index2["slug"])
#         i+=1
#     else:
#         a=1
#         child=["childExercises"]
#         for index3 in child:
#             print(" ",a,index3,["name"])
#             a+=1



















# i=0

# print("slug",data_2["data"][1]["slug"])
# for k in range(len(data_2["data"])):
#     i+=1
#     # print(i,data_2["data"][k]["name"])
#     s=1
#     if data_2["data"][k]["childExercises"]==[]:
#         print(" ",s,data_2["data"][k]["slug"])
#         s+=1
#     else:
#         n=1
#         for question in range(len(data_2["data"][k]["childExercises"])):
#             print(" ",n,data_2["data"][k]["childExercises"][question]["name"])


# slug1=int(input("Enter the question no:-"))
# #           
# Data=data_2["data"][slug1-1]["childExercises"]
# index5=1
# question=[]
# for index6 in Data:
#     question.append(index6)
#     print(" ",index5,index6["name"]) 














#     # if index2["childExercises"]==[]:
#     #     print(" ",i,index2["slug"])
#     #     i+=1
#     # # # else:
#     #     a=1
#     #     child=["childExercises"]
#     #     for index3 in child:
#     #         print(" ",a,index3,["name"])
#     #     a+=1







# # slug=int(input("Enter the question no:-"))
# # # slug1=data_2["data"][slug-1]["slug"]
# # # index3=0
# for index4 in data_2["data"]:
#     print(index3+1,index4["slug"])
#     index3+=1











    

# next_sept=input("Do you want (Next/n and Previous/p) :-")
# if next_sept=="n" or next_sept=="Next":
#     index=1
#     child_data=data_2["data"]
#     for index2 in child_data:  
#         print(index,index2,["name"])
#         index+=1
#         i=1
#         if index2["childExercises"]==[]:
#             print(" ",i,index2["slug"])
#             i+=1
#         else:
#             a=1
#             child=["childExercises"]
#             for index3 in child:
#                 print(" ",a,index3,["name"])
#                 a+=1
# next1_sept=input("Do you want Next/n and Previous/p :-")
# user=int(input("Which Topic do you want:"))
# if next1_sept=="n" or next1_sept=="Next":
#     k=1
#     child=data["data"]
   
#     for index4 in child:
#         print(k,index4,["name"])
#         k+=1
#         k1=1
#         if index4["childExercise"]==[]:
#             print(" ",k1,index4["slug"])
#             k1+=1

