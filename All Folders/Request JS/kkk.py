import requests
import json

saral=requests.get("http://saral.navgurukul.org/api/courses" )
print(saral)

Data=saral.json()
with open("Cild_Data.json","w") as file:
    json.dump(Data,file,indent=4)
serial=0

for i in Data["availableCourses"]:
    print(serial+1,(" -"),i["name"],(" - "),i["id"])
    serial+=1
print(" ")
topic=int(input("What Course Do You Want Plase Enter of Number of cousre:-"))
id=Data["availableCourses"][topic-1]["id"]
name=Data["availableCourses"][topic-1]["name"]
print(name)


child_Exercise=requests.get("http://saral.navgurukul.org/api/courses/"+Data["availableCourses"][topic-1]["id"]+" "+"/exercises")
data=child_Exercise.json()
with open("Parnts_Data.json","w") as file2:
    json.dump(data,file2,indent=4)


    serial_no=1
    serial_no1=1
    topic_list=[]
    #for printing the details of the specific courses:

    for index1 in data["data"]:
        if len(index1["childExercises"])==0:
            print("   ",serial_no,".",index1["name"])
            topic_list.append(index1["name"])
            print("           ",serial_no1,".",index1["slug"])
            serial_no+=1
        else:
            serial_no2=1
            print("   ",serial_no,".",index1["name"])
            topic_list.append(index1["name"])
            for questions in index1["childExercises"]:
                print("         ",serial_no2,".",questions["name"])
                serial_no2+=1
            serial_no+=1


#     #taking user input for next or previous:
    a=input("Enter whether you want to go next or previous(n/p):")

    # if user input is previous then the below code will be executed :
    serial_no=1
    serial_no1=1
    if a=="p":
        for index1 in data["data"]:
            if len(index1["childExercises"])==0:
                print("   ",serial_no,".",index1["name"])
                print("           ",serial_no1,".",index1["slug"])
                serial_no+=1
            else:
                serial_no2=1
                print("   ",serial_no,".",index1["name"])
                for questions in index1["childExercises"]:
                    print("         ",serial_no2,".",questions["name"])
                    serial_no2+=1
                serial_no+=1

    # taking user input asking for specific parent course:

    slug=int(input("Enter the topic number:"))
    question_list=[]
    slug_list=[]
    print("     ",slug,".",topic_list[slug-1])

    #code for slug having childExercise(More than one question):

    for index1 in data["data"][slug-1]["childExercises"]:
        s_num=1
        for index1 in data["data"][slug-1]["childExercises"]:
            print("           ",s_num,".",index1["name"])
            question_list.append(index1["name"])
            s_num+=1

        que=int(input("Enter question number:")) 
        w=requests.get("http://saral.navgurukul.org/api/courses/"+str(Data["availableCourses"][topic-1]["id"])+"/exercise/getBySlug?slug="+str(data["data"][slug-1]["childExercises"][que-1]["slug"]))
        DATA=w.json()
        with open("question.json","w") as a:
            json.dump(DATA,a,indent=4)
            print(DATA["content"])

            break


    for i in range(len(question_list)):
        k=input("Enter what you want/next or previous(n/p):-")
        if k=="n":
            if que==len(question_list):
                print("Next page!")
                break
            else:
                w=requests.get("http://saral.navgurukul.org/api/courses/"+str(Data["availableCourses"][topic-1]["id"])+"/exercise/getBySlug?slug="+str(data["data"][slug-1]["childExercises"][que-2]["slug"]))
                DATA=w.json()
                with open("question.json","w") as a:
                    json.dump(DATA,a,indent=8)
                    print(DATA["content"])
                    que+=1
        if k=="p":
            if que==len(question_list):
                print("No more question:")
                break
            else:
                w=requests.get("http://saral.navgurukul.org/api/courses/"+str(Data["availableCourses"][topic-1]["id"])+"/exercise/getBySlug?slug="+str(data["data"][slug-1]["childExercises"][que-2]["slug"]))
                DATA=w.json()
                with open("question.json","w") as a:
                    json.dump(DATA,a,indent=8)
                    print(DATA["content"])
                    que+=1
    # code for slug having no childExercise:
    # agar childExercise khali hoga to yh print honga.

    else:
        s_no=1
        print("   ",s_no,".",data["data"][slug-1]["slug"])
        slug_list.append(data["data"][slug-1]["slug"])

        que=int(input("Enter question number:"))
        v=requests.get("http://saral.navgurukul.org/api/courses/"+str(Data["availableCourses"][topic-1]["id"])+"/exercise/getBySlug?slug="+str(data["data"][slug-1]["slug"]))
        d=v.json()
        with open("question.json","w") as f:
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



