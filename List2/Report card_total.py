
marks = [
    [78, 76, 94, 86, 88],
    [91, 71, 98, 65, 76],
    [95, 45, 78, 52, 49]
] 
i=0
sum=0
count=0

while i<len(marks):
     num=marks[i]
     a=num[0]+num[1]+num[2]+num[3]+num[4]
     a=num[0]+num[1]+num[2]+num[3]+num[4]
     a=num[0]+num[1]+num[2]+num[3]+num[4]
     count=count+1
     sum=sum+a
     i=i+1
print("Total Marks=",sum,"Count:",count)     




marks = [
    [78, 76, 94, 86, 88],
    [91, 71, 98, 65],
    [95, 45, 78],
    [87, 67, 49, 68, 88]
] 

i=0
sum=0
while i<len(marks):
    a=0
    t=0
    while a<len(marks[i]):
        t=t+(marks[i][a])
        a=a+1
    sum=sum+t
    i=i+1
print("Marks=",sum)    

     




marks = [
    [78, 76, 94, 86, 88],
    [91, 71, 98, 65],
    [95, 45, 78]
] 

i=0
sum=0
while i <len(marks):
    a=0
    s=0
    while a<len(marks[i]):
        s=s+(marks[i][a])
        a=a+1
    sum=sum+s
    i=i+1
print(sum)        




























