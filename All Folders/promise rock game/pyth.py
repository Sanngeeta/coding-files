
from random import randint

def win():
    print ('You win!')

def lose():
    print ('You lose!')

while True:
    player_choice = input('What do you pick? (rock, paper, scissors)')
    player_choice.strip()
    random_move = moves[randint(0, 2)]
    moves = ['rock', 'paper', 'scissors']
    computer_choice = random_move
    print(computer_choice)

    if player_choice ==computer_choice:
        print ('Draw!')
    elif  player_choice == 'rock' and computer_choice == 'scissors':
        win()
    elif  player_choice == 'paper' and computer_choice == 'scissors':
        lose()
    elif player_choice  == 'scissors' and computer_choice == 'paper':
        win()
    elif player_choice  == 'scissors' and computer_choice == 'rock':
        lose()
    elif player_choice  == 'paper' and computer_choice == 'rock':
        win()
    elif player_choice  == "scissors" and computer_choice == "rock":
        win()
    aGain = input('Do you want to play again? (y or n)').strip()
    if aGain == 'n':
        break 
