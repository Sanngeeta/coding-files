import requests
import json

childExercise=("http://saral.navgurukul.org/api/courses")
api=requests.get(childExercise)
data=api.json()
with open("data.json","w") as file:
    json.dump(data,file,indent=5)

def Meraki_request():
    serial=1
    for i in data["availableCourses"]:
        print(serial,i["name"], i["id"])
        serial+=1
    print("    ")
    user=int(input("Which course do you want:"))
    print(data["availableCourses"][user-1]["name"],data["availableCourses"][user-1]["id"])
Meraki_request()

user=int(input("Which course do you want:"))
print(data["availableCourses"][user-1]["name"],data["availableCourses"][user-1]["id"])
chosie=input("Enter whether you want to go next or previous:(n/p)")
if chosie=="p":
    Meraki_request()

parentExercise="http://saral.navgurukul.org/api/courses/"+data["availableCourses"][user-1]["id"]+""+"/exercises"
api=requests.get(parentExercise)
data1=api.json()
with open("parentData.json","w") as file1:
    json.dump(data1,file1,indent=5)
    s=1
for i in data1["data"]:
    print(s,i["name"])
    s+=1
    list_list=[]
    slug_list=[]
    
    k=1
    print("     ")
    topic=int(input("Which question do you want:"))
    if data1["data"][topic-1]["childExercises"]==[]:
        s_no=1
        print("   ",s_no,".",data1["data"][topic-1]["slug"])
        s_no+=1

    else:
        n=1
        for question in range(len(data1["data"][topic-1]["childExercises"])):
            print(" ",n,data1["data"][topic-1]["childExercises"][question]["name"])
            n+=1
        print(" ")


    inside_question=int(input("Enter the question number :"))
    conten="http://saral.navgurukul.org/api/courses/"+str(data["availableCourses"][user-1]["id"])+"/exercise/getBySlug?slug="+str(data1["data"][topic-1]["slug"])

    api=requests.get(conten)
    content=api.json()

    with open("content_Data.json","w") as file3:
        json.dump(content,file3,indent=5)
        print(content["content"])
        




else:
    s_no=1
    print("   ",s_no,".",data1["data"][topic-1]["slug"])
    slug_list.append(data["data"][topic-1]["slug"])

    que=int(input("Enter question number:"))
    v=requests.get("http://saral.navgurukul.org/api/courses/"+str(data["availableCourses"][user-1]["id"])+"/exercise/getBySlug?slug="+str(data["data"][topic-1]["slug"]))
    d=v.json()
    with open("content_Data.json","w") as file3:
        json.dump(content,file3,indent=5)
        print(content["content"])

    for i in range(len(slug_list)):
        gon=input("Enter whether you want to go next or previous:(n/p)")
        if gon=="n":
            print("Next page.")
            break
        if gon=="p":
            print("No more questions.")
            break















# # index=0
# # for i in data_2["data"]:
# #     print(index+1,i["name"])
# #     index+=1
# # print(" ")

# # data=data_2["data"]
# # for j in data:
# #     s1=1
# #     child=j["childExercises"]
# #     for index2 in child:
# #         s1+=1
