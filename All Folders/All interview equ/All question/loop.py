

# num=input("Enter your name:")
# i=0
# while i<len(num):
#     print(num.upper()[i]+num.lower()[i]*(i),end="")
#     if i!=len(num)-1:
#         print("_",end="")

#     i=i+1


# i=1
# while i<=5:
#     a=1
#     while a<=5:
#         print(a,end=' ')
#         a=a+1
#     print()
#     i=i+1



# i=1
# k=65
# while i<7:
#     a=1
#     while a<=5:
#         print(chr(k),end=' ')
#         a=a+1
#         k+=1
#     print()
#     i=i+1


# i=1
# k=65
# while i<=5:
#     a=1
#     while a<=i:
#         print(chr(k)[i],end="")
#         a=a+1
#         k=k+1
#     print()
#     i=i+1


# for i in range(5):
#     print(i)


# for i in (1,2,3,4):
# #     print(i)


# for i in (2,3,4):
#     print("i")


# for i in (4,3,2,1,0):
#     print(i, end=" ")




# for i in range(10):
#     if(i%2!=0):
#         print("Hello",i)


# for i in range(10,2,-2):
#     print(i, "Hello")

# str = "Python Output based Questions"
# word=str.split()
# for i in word:
#     print(i)


# for i in range(7,10):
#     print("Python Output based Questions")
# print("Python Output based Questio")


# for i in range(7,-2,-9):
#     for j in range(i):
#         print(j)


# i="934567"
# for k in i:
#     print(k)

# p=10
# q=20
# p=p*q//4
# q=p+q**3
# print(p,q)

# n=11
# for i in range(2,n//2):
#     if n%i!=0:
#         print("Python Output based Questions")
#         break
#     else:
#         print("Bye")


# x=10
# for i in range(x):
#     if x==5:
#         break
#     print("H")
# print(x)

# for i in range(5):
#     print("AS"*i,"\n")


# def sq(num):
#     words = list(str(num))  # split the text
#     for word in words:  # for each word in the line:
#         print(int(word)**2,end=" ") # print the word

# num = 9119
# sq(num)


# Pair up the consecutive elements of the said list:
# [[1, 2], [2, 3], [3, 4], [4, 5]]


list=[1, 2, 3, 4, 5]
k=[]
new=[]
i=0
while i<len(list):
    a=0
    while a<len(list):
        if list[i]<list[a]:
            num=([list[i],list[a]])
            new.append(num)
        a=a+1
    i=i+1
print(new)
        

