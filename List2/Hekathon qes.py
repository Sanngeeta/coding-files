
# num=[1,2,3,4,5]
# i=0
# b=num[0]
# sum=0
# k=num[0]
# s=0
# while i<len(num):
#     if num[i]>b:
#         b=num[i]
#         sum=sum+b
#         if num[i]<k:
#             k=num[1]+num[2]+num[3]+num[4]+num[5]
#             s=s+k   
#     i=i+1    
# print(sum)  
# print(s)



# a = "this is a string"
# b = a.split(" ")
# b = "-".join(b)
# # print(b)

# lst = ["Swati", "Muskan","Priyanka", "Madu"]
# print(lst.pop(2))


# grade=73 rount to 85 muliple 5 (75-73  is less than 3)
# g=67 multiple of 5 (67-70 is== 3)
# g= 38 multiple 5(38-40 is less than 3)
# g=33 multiple 5(33)

# sliceing


# import math
# import os
# import random
# import re
# import sys

# def birthdayCakeCandles(candles):
#     max_hight=max(candles)
#     count=candles.count(max_hight)
#     print(count)

# if __name__ == '__main__':
#     fptr = open(os.environ['OUTPUT_PATH'], 'w')

#     candles_count = int(input().strip())

#     candles = list(map(int, input().rstrip().split()))

#     result = birthdayCakeCandles(candles)

#     fptr.write(str(result) + '\n')

#     fptr.close()







# def timeConversion(s):
#     if(s[-2:]=="AM" and s[:2]=="12"):
#         return "00"+s[2:8]
#     elif (s[-2:]=="AM"):
#         return s[0:8]
#     elif (s[-2:]=="PM" and s[:2]=="12"):
#         return s[0:8]
#     else:
#         return str (int(s[:2])+12)+s[2:8]
# print(timeConversion("07:05:45PM"))    




# candles=[4,4,1,3]
# max_hight=max(candles)
# count=candles.count(max_hight)
# print(count)




# textwrap=ABCDEFGHIJKLIMNOQRSTUVWXYZ
# def wrap(string, max_width):
# print(textwrap.fill(string,max_width))








# n = int(input())
# student_marks = {}
# for _ in range(n):
#     name, *line = input().split()
#     scores = list(map(float, line))
#     student_marks[name] = scores
#     query_name = input()
#     lst_marks=student_marks[query_name]
#     percent=sum(lst_marks)/len(lst_marks)
#     print('{p:1.2f}'.format(p=percent))



# a = "this is a string"
# b =a.split()
# i=0
# while i<len(b):
    
#     print(b[i],end=("-"))
#     i=i+1
   


lst = ["Swati", "Muskan","Priyanka", "sa"]
i=0
a=0
while i<len(lst):
        if a<len(lst[i]):
            a=len(lst[i])
            k=lst[i]
        i=i+1
print(k)            