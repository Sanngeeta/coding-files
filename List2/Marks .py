

marks=[23,55,67,21,34,12]
i=0
less=0
more=0
while i<len(marks):
    number=marks[i]
    if number<50:
        less=less+1
    else:
        more=more+1
        
    i=i+1
print("Marks more than 50:",(more))    
print("Marks less than 50:",(less))   





# marks=[23,45,89,90,56,80]
# i=0
# total=0
# while i<len(marks):
#     total=total+marks[i]
#     i=i+1
# print("Total Marks="+str(total))




