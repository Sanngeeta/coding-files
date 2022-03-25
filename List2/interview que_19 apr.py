

num=[[45,5,71],[12,78,100],[34,78,12]]
i=0
l=[]
while i<len(num):
    a=0
    k=num[i][0]
    while a<len(num[i]):
        if num[i][a]>k:
            k=num[i][a]
            l.append(k)
        a=a+1
    i=i+1 
    l.append(k)
print(l)

  


# num=int(input("enter your number"))
# i=0
# k=len(num)
# l=str(num[i])
# n=k-l
# while i<l:
#     yn=k*10(k**i)
#     print(yn)

#     i=i+1


