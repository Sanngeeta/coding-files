marks = [
    [78, 76, 94, 86, 88],
    [91, 71, 98, 65, 76],
    [95, 45, 78, 52, 49]
]

i=0

count=0
while i<len(marks):
    sum=0 
    a=0
    s=0
    while a<len(marks[i]):
        s=s+marks[i][a]
        a=a+1
        
    sum=sum+s
    
    Avg=sum//a
    i=i+1
    count=count+1
    print("Marks",Avg,":",count)
        

marks = [
    [78, 76, 94, 86, 88],
    [91, 71, 98, 65],
    [95, 45, 78]
] 

i=0
y=0
while i<len(marks):
    sum=0
    a=0
    s=0
    while a<len(marks[i]):
        s=s+(marks[i][a])
        a=a+1
    sum=sum+s
    y=sum//len(marks[i])
  
    print(y)  
    i=i+1     




marks = [
    [78, 76, 94, 86, 88],
    [91, 71, 98, 65],
    [95, 45, 78],
    [87, 67, 49, 68, 88]
] 

i=0
k=0
while i<len(marks):
    sum=0
    a=0
    n=0
    while a<len(marks[i]):
        n=n+marks[i][a]
        a=a+1
    sum=sum+n
    k=sum//len(marks[i])
    i=i+1
    print(k)    









