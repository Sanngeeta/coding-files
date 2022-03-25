# # table  print
# [[2, 4], [4, 8], [5, 10], [6, 12], [7, 14], [8, 16]]
# list=[2,4,5,6,7,8]
# i=0
# l=[]
# while i<len(list):
#     a=0
#     while a<len(list):
#         if list[i]==list[a]:
#             k=[list[i]*list[i]]
#             k=i*a
#             l.append(k) 
#             # print(a)
#             a=a+1
#     i=i+1
# print(l)


#  Write a Pytho [4, 8], [5, 10], [6, 12], [7, 14], [8, 16]]
# list=[2,4,5,6,7,8]
# i=0
# l=[]
# while i<len(list):
#     a=0
#     while a<len(list):
#         # if list[i]==list[a]:
#             # k=[list[i]*list[i]]
#             k=i*a
#             l.append(k) 
#             a=a+1
#     i=i+1
# print(l)


#  Write a Python program to count the number of strings where the string length is 2 or more and the first and last character are same from a given list of strings. Go to the editor
# Sample List : ['abc', 'xyz', 'aba', '1221']
# Expected Result : 2
# list=['abc', 'xyz', 'aba', '1221']
# i=0   
# c=0
# for i in list:
#     if i[0]==i[-1]:
#         k=i
#         print(k)
#         c=c+1
# print(c)

#  Write a Python program to remove duplicates from a list. 
# list=['num','pink','black','num','soon','soon']
# i=0
# while i<len(list):
#     a=0
#     while a<len(list):
#         if list[a]==list[i]:
#             del(list[a])
#         a=a+1
#     i=i+1
# print(list)




# 8. Write a Python program to check a list is empty or not.
# l=['k','p']
# if not l:
#     print(l,'list is empty')
# else:
#     print(l,'list not empity')

# def common_data(list1, list2):
#      result = False
#      for x in list1:
#          for y in list2:
#              if x == y:
#                  print(x,y)
#                  result = True
#                  return result
# print(common_data([1,2,3,4,5], [9,6,7,8,9]))
# # print(common_data([1,2,3,4,5], [6,7,8,9]))


# list=['Red', 'Green', 'White', 'Black', 'Pink', 'Yellow']
# # Expected Output : ['Green', 'White', 'Black']
# for i in list:
#    k= list[1:-2:]
# print(k)

# 14. Write a Python program to print the numbers of a specified list after removing even numbers from it. Go to the editor
# list=[12,23,1,4,10,3]
# i=0
# while i<len(list):
#     k=list[i]
#     if k%2==0:
#         del(list[i])
#     i=i+1
# print(list)