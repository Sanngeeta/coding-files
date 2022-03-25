
n = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]  
def remove_duplicates(duplist):
    noduplist=[]
    for a in duplist:
        if a not in noduplist:
            noduplist.append(a)
    return noduplist        
print(remove_duplicates(n) )              



# n = [19, 17, 12, 17, 17, 18, 10, 17, 14, 14,12, 19, 17, 12, 13, 11]  
# i=0
# y=[]
# while i<len(n):
#     j=0
#     while j<len(n):
    
#         if n[i]==n[j]:
#             del(n[i])
#         j=j+1
#     i=i+1
# print(n)        



# a=[2,5,6,6,4,3,4,11,8,11,23,25,12,16,15,15]
# i=0
# y=[]
# while i<len(a):
#     j=0
#     while j<len(a):
#         if a[j]==a[i]:
#             del(a[j])
#         j=j+1
#     i=i+1
# print(a)            



# a=["pink","balck","red","pink","blue","red","yellwo","balck","green","green"]
# i=0
# y=[]
# while i<len(a):
#     j=0
#     while j<len(a):
#         if a[j]==a[i]:
#             del(a[j])
#         j=j+1
#     i=i+1
# print(a)            

