binary_number = [1, 0, 0, 1, 1, 0, 1, 1] 
y=[]
i=0
sum=0
while i<len(binary_number):
    k=binary_number[-i-1]*(2**i)
    sum=sum+k
    y.append(sum)
    i=i+1
print(y)    