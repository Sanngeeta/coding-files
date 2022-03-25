const magic = [
    [8, 3, 4],
    [1, 5, 9],
    [6, 7, 2]
] 


var sum2=0
var sum3=0
var sum4=0
var sum=0
var sum5=0
var i=0
while(i<magic.length){
    var row=0
    while(row<magic[i].length){
        sum= sum + magic[i][row]
        row+=1
    }
        var sum1=0

        j=0
        while(j<magic.length){
            var col=0
            while (col<magic.length){ 
                sum1=sum1+magic[i][col]
                col+=1
            }
         j+=1
        }
         a=0
         while(a<magic.length){
             dol=0
             while(dol<magic[i].length){
                 sum2=sum2+magic[i][dol]
                 dol+=1
                
            a=a+1}
         }
    
    
    i+=1}


if (sum==sum1 && sum1==sum2 ){
    console.log("It's magic square")
}else{
    console.log("It's not magic aquare")
}




