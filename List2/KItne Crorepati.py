
kitna = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100] 
a=[]
b=[]
c=[]
i=0
while i<len(kitna):
    num=kitna[i]
    if num>10000000:
        a.append(num)
    elif num>1000000:
        b.append(num)
    else:
        c.append(num)
    i=i+1
print("Crorepati hai:",a)       
print("Lakhpati hai:",b)
print("Dilwale hai:",c)        
