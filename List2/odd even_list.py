
lst=[9,8,6,5,4,2,7]
i=0
a=[]
y=[]
count=0
count1=0
while i<len(lst):
        b=lst[i]
        if b%2==0:
                a.append(b)
                count=count+1

        else:
                y.append(b)
                count1=count1+1
        i=i+1
print("Even:",a,"count=",count,"___""Odd",y,"count=",count1) 
# print("even:",a,"count=",count) 
# print("odd:",y,"count=",count1)      






num = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43] 

i=0
k=[]
n=[]
while i<len(num):
    a=num[i]
    if a%2==0:
        k.append(a)
    else:
        n.append(a)
    i=i+1
print("Even=",k,"Odd=",n)            






