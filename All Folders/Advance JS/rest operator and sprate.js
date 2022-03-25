// rest operator
// its will give array
// function sum(...inputs){
//     console.log(inputs)
// }
// sum(1,2,3,4,5,6,7)


// // its will give all velues  
// function sum(...inputs){
//     console.log(...inputs)
// }
// sum(1,2,3,4,5,6,7)


// function sum(...inputs){
//     console.log(inputs)
//     sum=0
//     for(i of inputs){
//         sum+=i
//     }
//     console.log(sum)
// }
// sum(1,2,3,4,5,6,7)


// function sum(a,b,...restnumber){
//         console.log(restnumber)
//         console.log(a+b)
//     }
//     sum(10,5,33,12,36,11)
    
    


// function fun(a,b,...c){
//     console.log(a,b)
//     console.log(c)
//     console.log(c[0])
//     console.log(c.length)
//     console.log(c.indexOf('eden'))

// }
// fun('Ronaldo','neymar','pele','messi','eden')




// spread operator
// var a=[10,20,30,40]
// var b=[50,60,70,80]
// var c=[...a,...b]
// var b=[...a]
// a[0]=50
// b[0]=80

// console.log(a)
// console.log(b)
// console.log(c)




// // Spread opretor
// var a={coursName:"javascript",student:"sangeeta"}
// var b=a
// var b={...a}
// a.coursName="python"
// console.log(a)
// console.log(b)
// // // // ES5 me ham apply ka use karte the
// function sum(a,b,c){
//     console.log(a+b+c)
// }
// arry =[2,45,6]
// sum.apply(null,arry)




// // ES6 me ham spread ka use karte hai
// function sum(a,b,c){
//     console.log(a+b+c)
// }
// arry =[2,45,6]
// // sum(...arry)
// arr=[12,45,33,7,89,1]
// console.log(...arr)


// let arr=[12,45,33,7,89,1]
// let a=[2,5,8,1,4,5]
// // ES 5
// // k=arr.concat(a)
// // console.log(k)

// // ES6
// k=[...arr,...a]

// console.log(k)




// rest 
// function sum(a,b,...c){
//     console.log(a+b)
//     console.log(c);
// }

// sum(2,5,76,87,8,98)



// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// let arr3 = [7,8,9]
// arr1=[...arr1,...arr2,...arr3]
// console.log(arr1)