
a=[1,2,[3],[4,5],6,7,8,[9]]
i=0
list1=[]
list=[]
while i<len(a):
    if type(a[i])==type(a):
        list1.append(a)
    i=i+1
print(list1)

