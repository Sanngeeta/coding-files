const magic = [
    [8, 3, 4],
    [1, 5, 9],
    [6, 7, 2]
] 

i=0
sum=0
sum1=0
sum2=0
while (i<magic.length){ 
    col=0
    while(col<magic[i].length){
        sum+=magic[i][col]
        col+=1}
    j=0
    while(j<magic.length){
        row=0
        while(row<magic[i].length){
            sum1+=magic[i][row]
            row+=1
        j+=1}
    }
    k=0
    while(k<magic.length){
        dig=0
        while (dig<magic[i].length){
            sum2+=magic[i][dig]
            dig+=1
        k+=1}
  
    }
    i+=1
    

}
console.log(sum)
console.log(sum1)
console.log(sum2)
if (sum==sum1 && sum1==sum2){
    console.log("Its magic squar")
}else{
    console.log("it's not magic aquar")
}




// magic = [
//     [8, 3, 4],
//     [1, 5, 9],
//     [6, 7, 2]
// ] 

// i=0
// s=0
// while i<len(magic):
//     col=0
//     while col<len(magic[i]):
//         s=s+magic[i][col]  
//         col=col+1
//     j=0
//     s1=0
//     while j<len(magic[i]):
//         row=0
//         while row<len(magic[i]):
//             s1=s1+magic[i][row]
//             row=row+1
//         j=j+1   
//     k=0
//     s2=0
//     while k<len(magic[i]):
//         dig=0
//         while dig<len(magic[i]):
//             s2=s2+magic[i][dig]
//             dig=dig+1
//         k=k+1
//     i=i+1 
// print(s)       
// print(s1) 
// print(s2) 
// if s==s1==s2:
//     print("its magical squar")
// else:
//     print("its not magical squar ")    
  
