# name=["snowball","chewy","Bubbles","gruff",]
# animal=["Cat","Dog","Fish","Goat",]
# age=[1,2,2,6,]
# i=0
# while i<len(name):
#     print(name[i],"the",animal[i],"is",age[i])
#     i=i+1



# list1=[10,20,[300,400,[5000,6000],500],30,40]
# list1[2][2].append(7000)
# print(list1)


# list1=["M","na","i","ke"]
# list2=["y","me","s","lly"]
# i=0
# y=[]
# while i<len(list1):
#         k=list1[i]+list2[i] 
#         y.append(k)  
#         i=i+1
# print(y)
       

# num=[1,2,3,4,5,6,8]
# a=int(input("enter the number"))
# i=-1
# y=[]
# while i<len(num):
#         y.append(num[i])
#         if num[i]==a:
#                 break
#         i=i-1
# print(y)            



a=int(input("enter the number"))
i=1
while a>0:
        k=a%10
        n=k*i
        a=a//10
        
        i=i*10
        print(n,"+",end="")
