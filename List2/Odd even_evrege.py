
num = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43] 

i=0
k=[]
n=[]
sum=0
s=0
yn=0
ny=0
while i<len(num):
    a=num[i]
    if a%2==0:
        k.append(a)
        sum=sum+a
        yn=sum//len(k)
        
        
    else:
        n.append(a)
        s=s+a
        ny=s//len(n)

    i=i+1
print("Even:",k,"Total sum=",sum,"Odd",n,"Total sum=",s)
print("Even Avrege:",yn)
print("Odd Avrege:",ny)           













