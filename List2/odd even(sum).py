

num = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43] 

i=0
k=[]
n=[]
sum=0
s=0
while i<len(num):
    a=num[i]
    if a%2==0:
        sum=sum+a
        k.append(a)
        
    else:
        s=s+a
        n.append(a)
        
    i=i+1
print("Even:",k,"Total sum=",sum)
print("Odd:",n,"Total sum=",s)            


