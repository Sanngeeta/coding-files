

num = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]

i=0
a=[]
b=[]
c=0
d=0
sum1=0
sum2=0
sum=0
sum3=0
c1=0
c2=0 
c3=0
while i<len(num):
    k=num[i]
    if k%2==0:
        a.append(k)
        sum1=sum1+k
        c=sum1//len(a)
        c1=c1+1
    else:
        b.append(k)
        sum2=sum2+k
        d=sum2//len(b)
    sum3=+sum1+sum2
    sum=sum3//len(a+b)
    c2=c2+1
    c3=+c2+c1
    i=i+1
print("Even= ",a,"count",c1,"odd ",b,"count",c2)
print("Total Count",c3)    
print("Even sum ",sum1,"odd sum ",sum2)
print("Even Evrege: ",c,"Odd Evrege: ",d)
print("Even and odd sum: ",sum3)
print("Even and odd total avg: ",sum)

