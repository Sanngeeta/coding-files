import requests
import json

childExercise=("http://saral.navgurukul.org/api/courses")
api=requests.get(childExercise)
data=api.json()
with open("data.json","w") as file:
    json.dump(data,file,indent=5)

serial=1
for i in data["availableCourses"]:
    print(serial,i["name"], i["id"])
    serial+=1

user=int(input("Which topic do you want:"))
print(data["availableCourses"][user-1]["name"],data["availableCourses"][user-1]["id"])


parentExercise="http://saral.navgurukul.org/api/courses/"+data["availableCourses"][user-1]["id"]+""+"/exercises"
api=requests.get(parentExercise)
data1=api.json()
with open("parentData.json","w") as file1:
    json.dump(data1,file1,indent=5)


    serial_no=1
    serial_no1=1
   
    topic_list=[]
   
    for i in data1["data"]:
        if len(i["childExercises"])==0:
            print("   ",serial_no,".",i["name"])
            topic_list.append(i["name"])
            print("           ",serial_no1,".",i["slug"])
            serial_no+=1
        else:
            serial_no2=1
            print("   ",serial_no,".",i["name"])
            topic_list.append(i["name"])
            for questions in i["childExercises"]:
                print("         ",serial_no2,".",questions["name"])
                serial_no2+=1
            serial_no+=1

    print(" ")

    slug_part=int(input("Which Question Do You Want :"))
    question_list=[]
    slug_list=[]
    print("     ",slug_part,".",topic_list[slug_part-1])

    s_no=1
    for i in data1["data"][slug_part-1]["childExercises"]:
        print("           ",s_no,".",i["name"])
        question_list.append(i["name"])
        s_no+=1

    inside_question=int(input("Enter the question number :"))
    api=requests.get("http://saral.navgurukul.org/api/courses/"+str(data["availableCourses"][user-1]["id"])+"/exercise/getBySlug?slug="+str(data1["data"][slug_part-1]["childExercises"][inside_question-1]["slug"]))    
    content1=api.json()
    with open("content_Data_saral.json","w") as file3:
        json.dump(content1,file3,indent=5)
        print(content1["content"])
        
    

    for i in range(len(question_list)):
        chosie=input("Enter what you want/next or previous(n/p):-")
        if chosie=="n":
            if question_list==len(question_list):
                print("Next page!")
                break
            else:
                api=requests.get("http://saral.navgurukul.org/api/courses/"+str(data["availableCourses"][user-1]["id"])+"/exercise/getBySlug?slug="+str(data1["data"][slug_part-1]["childExercises"][inside_question-1]["slug"]))    
                content1=api.json()
                with open("content_Data_saral.json","w") as file3:
                    json.dump(content1,file3,indent=5)
                    print(content1["content"])
                    inside_question+=1
        if chosie=="p":
            if question_list==len(question_list):
                print("No more question:")
                break
        else:
            api=requests.get("http://saral.navgurukul.org/api/courses/"+str(data["availableCourses"][user-1]["id"])+"/exercise/getBySlug?slug="+str(data1["data"][slug_part-1]["childExercises"][inside_question-1]["slug"]))    
            content1=api.json()
            with open("content_Data_saral.json","w") as file3:
                json.dump(content1,file3,indent=5)
                print(content1["content"])
                inside_question+=1
    
    else:
        s_no=1
        print("   ",s_no,".",data1["data"][slug_part-1]["slug"])
        slug_list.append(data1["data"][slug_part-1]["slug"])

    
        que=int(input("Enter question number:"))
        v=requests.get("http://saral.navgurukul.org/api/courses/"+str(data["availableCourses"][user-1]["id"])+"/exercise/getBySlug?slug="+str(data1["data"][slug_part-1]["slug"]))
        d=v.json()
        with open("content_Data_saral.json","w") as f:
            json.dump(d,f,indent=4)
            print(d["content"])
        for i in range(len(slug_list)):
            a=input("Enter whether you want to go next or previous:(n/p)")
            if a=="n":
                print("Next page.")
                break
            if a=="p":
                print("No more questions.")
                break
