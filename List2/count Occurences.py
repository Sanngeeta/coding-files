num= ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"] 
i=0
n=[]
while i <len(num):
    b=0
    count=0
    a=[]
    while b<len(num):
        if num[i]==num[b]:
            count=count+1
            
        b=b+1
    a.append(num[i])
    a.append(count)
    if a not in n:
        n.append(a)

    i=i+1
print(n)  




n = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11] 
i=0
a=[]
while i<len(n):
    l=0
    count=0
    b=[]
    while l<len(n):
        if n[i]==n[l]:
            count=count+1
            
        l=l+1
    b.append(n[i])
    b.append(count)
    if a not in b:
        a.append(b)

        i=i+1
print(a)              



