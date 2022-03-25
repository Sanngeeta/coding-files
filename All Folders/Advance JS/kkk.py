# # i=1
# # while i<=10:
# #     if i==3 or i==5:
# #         continue
    
# #     print(i)
# #     i=i+1
# from random import randint

# def win():
#     print ('You win!')

# def lose():
#     print ('You lose!')

# while True:
#     player_choice = input('What do you pick? (rock, paper, scissors)')
#     player_choice.strip()
#     random_move = moves[randint(0, 2)]
#     moves = ['rock', 'paper', 'scissors']
#     computer_choice = random_move
#     print(computer_choice)

#     if player_choice ==computer_choice:
#         print ('Draw!')
#     elif  player_choice == 'rock' and computer_choice == 'scissors':
#         win()
#     elif  player_choice == 'paper' and computer_choice == 'scissors':
#         lose()
#     elif player_choice  == 'scissors' and computer_choice == 'paper':
#         win()
#     elif player_choice  == 'scissors' and computer_choice == 'rock':
#         lose()
#     elif player_choice  == 'paper' and computer_choice == 'rock':
#         win()
#     elif player_choice  == "scissors" and computer_choice == "rock":
#         win()
#     aGain = input('Do you want to play again? (y or n)').strip()
#     if aGain == 'n':
#         break 




# i=1
# print(i)
# while i<5:
#     print("1"+"01"*i)
#     i=i+1



# list=[1,2,3,4,'a,b,c']
# # # d=dic={}

# # # for i in list:
   
# # #     dic[i]={}
# # #     dic=dic[i]
# # # # print(d)
# i=0
# num=[]
# while i<len(list):
#     if (type(list[i]))==(str):
#         num.append(list[i])
#         print(num)
#     i=i+1
# print(num)




# Es list ke lenth ke hisab se add length pr ke elemets nikalna he.
# list=[2,1,4,10,2,7,11]
# i=0
# while(i<len(list)):

#         print(list[i])
#         i=i+2

list=['python',2.6,24,True]
i=0
num=[]
while i<len(list):
    if (type(list[i]))==(str):
        num.append(list[i])
    i=i+1
print(num)

# name=input('Enter the name:-')
# letter=['i','o','e','a']
# i=0
# k=65
# while (i<len(name)):
#     if name in letter:
#         if letter==k:
#             print(name(k(chr)))
#             k=k+1
#     i=i+1


# list=['pooja','ng','sangeeta','navgurukul']
# list=[22,45,1,7,50]
# i=0
# k=[0]
# while i<len(list):
#     if list[i]>k:
#         num=list[i]
#     i=i+1
# print(num)