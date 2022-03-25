// //Impure function

// var x=10
// function add(){
//     console.log(x)
//     x++
// }

// add()
// add()
// add()
// add()


// // // Pure function 
// // var x=10
// // function add(x){
// //     console.log(x+1)
// //     // return x+1
    
// // }

// // add(10)
// // add(10)
// // add(20)
// // add(100)



// // function sum(a,b){
// //     return a+b
// // }
// // console.log(sum(5,10))



// // console.log(sum(5,10))



var tax = 20;
function calculateGST( productPrice ) {
    return productPrice * (tax / 100) + productPrice;
}
console.log(calculateGST(10))
console.log(calculateGST(10))
