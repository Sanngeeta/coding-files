// const magic = [
//     [8, 3, 4],
//     [1, 5, 9],
//     [6, 7, 2]
// ] 
// console.log("Matrix is *")
// for (var i=0; i<3;i++){
//     for (var j=0; j<3;j++){
//         console.log(magic[i][j])
//     }
//     console.log()
// }

// sumd1=0
// sumd2=0
// for  (var i=0;i<3;i++){
//     for (var j=0;j<3;j++){
//         if (i==j){
//             sumd1=sumd1+magic[i][j]
//     }
//         if (i+j==3-1){
//             sumd2=sumd2+magic[i][j]
//         }
//     }
// }
// if (sumd1!=sumd2){
//     f=1
// }
// else{
//     for (var i=0;i<3;i++){
//         sumr=0
//         sumc=0
//         for (var j=0; j<3;j++){
//             sumr=sumr+magic[i][j]
//             sumc=sumc+magic[i][j]
//         }
//         if (sumr!=sumd1){
//             f=1}
//         else if (sumc!=sumd1){
//             f=1
//         }
//         else{
//             f=0
//         }
//     }
// }
// if (f==0){
//     console.log("matrix is magic square")
// }
// else{
//     console.log("matrix is not magic square")}


const magic = [[8, 3, 4],
    [1, 5, 9],
    [6, 7, 2]
] 

for(i=0;i<magic.length;i++){
    sum=0
    for (row=0;row<magic.length;row++){
        sum+=magic[i][row]}
    //     for (k=0;k<magic.length;k++){
    //         sum1=0
    //         for(col=0;col<magic[i].length;col++){
    //             sum1+=magic[i][col]


            
        
        
    //         }
    // }
}
console.log(sum)