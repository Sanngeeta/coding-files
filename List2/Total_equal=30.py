number = 30
n = [10, 11, 12, 13, 14, 17, 18, 19] 
i=0
y=[]
while i<len(n):
        if n[i]+n[-i]==number:
            k=([n[i],n[-i]])
            y.append(k)
        i=i+1
print(y)         



# number = 30
# n = [10, 11, 12, 13, 14, 17, 18, 19] 
# i=0
# y=[]
# while i<len(n)/2:
#     a=0
#     while a<len(n):
#         if n[i]+n[a]==number:
#             k=([n[i],n[a]])
#             y.append(k)
#         a=a+1
#     i=i+1
# print(y)         


