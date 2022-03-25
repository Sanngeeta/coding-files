# list=[1,2,3,2,1,4]
# k=[]
# i=0
# while i<len(list):
#     if list not in k:
#         k.append(list)
#     i=i+1
# print(k)


num=int(input('Enter the number:-'))
num1=int(input('Enter the number:-'))
k=num//10
l=k%10

a=num1//10
n=a%10
k=[]
i=0
while i<len(num):
    if l==5 and n==5:
        k.append(l[i])
        k.append(n[i])
        i=i+1
print(k)















# # Write a Python program which accepts the user's first and last name and print them in reverse order
# name=input('Enter the first name:-')
# last=input('Enter the last name:-')
# print(last+" "+name)

# file=input('Enter the file name:-')
# k=file.split(".")
# print(k[1])



# str1='Navgurukul'
# i=0
# k={}
# while i<len(str1):
    
#     k.update({str1[i]:i})
   
#     i=i+1
# print(k)

# num=input('Enter the name:-')
# k=len(num)
# if  k>2:
#     if num[-3:]=='ing':
#         num+='ly'
#     else:
#         num+='ing'
# print(num)



# name=input('Enter the name:-')

# # if 'ing' and 'ly' in name:
# #     print("right")
# if 'ing' in name:
#     print(name+'ly')
# elif 'ly' in name:
#     print(name+'ing')
# if 'ing' and 'ly' not in name:
#     print(name+'ly'+'ing')
# if 'ing' and 'ly' in name:
    #  print("right")

