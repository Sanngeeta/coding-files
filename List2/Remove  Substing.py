
mainStr = "the quick brown fox jumped over the lazy dog. the dog slept over the verandah."
subStr=mainStr.split()
i=0
while i<len(subStr):
    if "over" in subStr:
        subStr.remove("over")
    i+=1
print(subStr)    



mainStr = "the quick brown fox jumped over the lazy dog. the dog slept over the verandah."
subStr = "over"
replacementStr = "on" 
num=mainStr.split()
i=0
while i <len(num):
    if "over" in num:
        num.remove("over")
        if "on" not in num:    
            num.insert(5,"on")
    i=i+1
print(num)        
