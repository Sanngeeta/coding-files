# # print(10*'Hello')

# # print('Enter the number')
# # inpun=input()
# # print('You enterd',inpun)

# # a='navgurukul'
# # print(a[5])

# # //Silcing
# # a='navgurukul'
# # print(a[1:])


# # uruku
# # a='navgurukul'
# # print(a[4:9])

# # a='navgurukul'
# # print(a[0:5])

# # a='navgurukul'
# # print('n' in a )

# # num="2.3,4,6,t,5,3,7,7"
# # print(len(num))
# # print(max(num))
# # print(min(num))

# # num=[1,3,5,'num',75]
# # num1=['gfdcty',213,5,675]
# # print(num+num1)

# # num=[1,3,5,'num',75]
# # num1=['gfdcty',213,5,675]
# # num=num+num1 
# # print(3*num)

# # num=[1,3,5,'num',75]
# # num[2]='j'
# # print(num)

# # num=[1,3,5,'num',75]
# # del num[2]
# # print(num)

# # num=[1,3,5,'num',75]
# # k=num.count(3)
# # print(k)

# # copy 
# # num=[1,3,5,'num',75]
# # print(num.copy())

# # num=[1,3,5,'num',75]
# # print(num.clear())



# # dic={"num1":"sumit","num2":"sandeep","num3":"suresh"}
# # del dic["num1"]
# # print(dic)

# # Precedence
# value=(1+1)*2**4//3+4-1
# #()= 2*2**4//3+4-1
# # 2**4=2*16//3+3-1
# # 2*16=32//3+4-1
# # 32/3= 10+4-1
# # 10+4=14-1
# # 14-1=13

# print(value)

# i=1
# while i<=3:
#     print('Outer Loop',i)
#     i+=1
#     j=1
#     while j<=5:
#         print('inner loop',j)
#         j+=1



# a=[10,20,30,[40,50]]
# n=len(a)
# for i in range(n):
#     if type(a[i]) is list:
#         if len(a[i])>1:
#             k=len(a[i])
#             for j in range(k):
#                 print(i,j,a[i][j])
#     else:
#         print(i,a[i])
  
# list=[]
# a=[[10,20,30],[40,50,60]]
# for i in a:
#     for k in i:
#         list.append(k)
# print(list)

# a=['1','2','3','4','5']
# list=[]
# i=0
# while(i<len(a)):
#     k=int(a[i])
#     list.append(k)
#     i=i+1
# print(list)


# ['1', '12', '123', '1234', '12345'] o/p 
# a=['1','2','3','4','5']
# list=[]
# k=''
# for i in a:
#     if ',' not in  i:
#         k+=i
#     else:
#         break
#     list.append(k)

# print(list)


# a=[1,2,3,4,8,9,10,12,15]
# for i in range(1,20):
#     if i not in a:
#         if i%2!=0:
#             print(i)



# a=['a','b','a','c','d','g','k','c','n']

# list=[]
# list1=[]
# for i in a:
#     c=0
#     for n in a:
#         if i==n:
#             c=c+1
#     if i not in list:
#         list.append(i)
#         k=[i,c]
#         list1.append(k)
# print(list1)




# list=[]
# newlist=[]
# for i in a:
#     c=0
#     for k in a:
#         if i==k:
#             c=c+1
#     if i not in list:
#         list.append(i)
#         k=[i,c]
#         newlist.append(k)
        
# print(newlist)




# a='1234ancd'
# i=0
# while i<len(a):
#     i=i+1
#     k=a[-i]
#     print(k,end='')



# a=[2,-7,5,-64,-14,9]
# i=0
# c=0
# c1=0
# while i<len(a):
#     if a[i]>0:
#         c=c+1
#     else:
#         c1=c1+1
#     i=i+1
# print('postive',c,'negetive',c1)
   

# list=[1,5,10,12,16,20]
# list1=[1,2,10,13,16]
# num=[]
# i=0
# n=list[0]
# while i<len(list):
#     k=list1+list1
#     a=0
#     while a<len(k):
#         if k[a]>n:
#             var=k[i]
#             print(var)
#         a=a+1
   
    
#     i=i+1
