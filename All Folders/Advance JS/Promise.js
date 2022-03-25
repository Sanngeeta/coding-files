// //Promise have 3 stages
// // 1. pending 
// // 2. resolve - fullfilled
// // 3.reject

const { captureRejectionSymbol } = require("events")

// //promise ka object create karne ke liye ham new keyword ka use karte hai

//executor
//promise ko produce karta hai
// const projes=new Promise((resolve,reject)=>{
//     setTimeout(()=> {
//         rollNumber=[1,2,3,4,5]
//         resolve(rollNumber)

//     },2000)
// })
// //promise ko consume karta hai
// projes.then((roll_no)=>{
//     console.log(roll_no)

// })






// we have 2 method 
// 1.then():-using whene task ko resolve kar leta hai to uske sath then ko show karna(resolve me kya kya hua use dikhne ke liye then method ka use karte hai)
// padta hai 
// 2.catch():-


// //reject
// const projes=new Promise((resolve,reject)=>{
//     setTimeout(()=> {
//         rollNumber=[1,2,3,4,5]
//         resolve(rollNumber)
//         // reject('Error while communication')

//     },2000)
// })
// //promise ko consume karta hai
// projes.then((roll_no)=>{
//     console.log(roll_no)

// })
// const getBiodata=(indexdata)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            const getBiodata={
//                 name:"sangeeta",
//                 age:21
//             }
//             resolve(`my roll no${BigInt.name}.my age${getBiodata.age}`)
//         },2000,indexdata)
//     })
// }

// // projes.then((roll_no)=>{
// //     console.log(roll_no)
// //     getBiodata(roll_no[1]).then((kuch)=>{
// //         console.log(kuch)
// //     })
// //  }).catch((error)=>{
// //      console.log(error)
// //  })


// let resolveFun=(result)=>{
//     console.log(result)
// }

// let rejectFun=(error)=>{
//     console.lopg(error)
// }

// EX:-


// var promiseNum=new Promise(function(resolve,reject){
//     a="Navgurukul"
//     b="Navgurukul"
//     if(a==b){
//         resolve()

//     }else{
//         reject()
//     }
// })
// promiseNum.then(function(){
//     console.log("Succes,You are a GEEk")
// }).catch(function(){
//     console.log("Some error has occured")
// })


// var promise = new Promise(function(resolve, reject) {
//     // resolve('Geeks For Geeks');
// })
  
// promise
//     .then(function(successMessage) {
//        //success handler function is invoked
//         console.log(successMessage);
//     }, function(errorMessage) {
//         console.log(errorMessage);
//     })

// var promise = new Promise(function(resolve, reject) {
//     throw new Error('Some error has occured')
// })
  
// promise
//     .then(function(successMessage) {
//         console.log(successMessage);
//     })
//     .catch(function(errorMessage) {
//        //error handler function is invoked
//         console.log(errorMessage);
//     });



// var promise = new Promise(function(resolve, reject) {
//     reject('Promise Rejected')
// })
  
// promise
//     .then(function(successMessage) {
//         console.log(successMessage);
//     })
//     .catch(function(errorMessage) {
//        //error handler function is invoked
//         console.log(errorMessage);
//     });

// let myPromise = new Promise(function(myResolve, myReject) {
//     // "Producing Code" (May take some time)
    
//       myResolve(); // when successful
//       myReject();  // when error
//     });
    
//     // "Consuming Code" (Must wait for a fulfilled Promise)
//     myPromise.then(
//       function(value) { /* code if successful */ },
//       function(error) { /* code if some error */ }
//     );


// function prom(complete){
//     return new Promise(function(resolve,reject){
//         console.log("Fetching data,please wait")
//         setTimeout(()=>{
//             if (complete){
//                 resolve("I am successfull")
//             }else{
//                 reject("I am failed")
//             }

//         },1000)

        
//     })
// }


// let onfulfilment= (result) =>{
//     console.log(result)

// }
// let onRejection= (error)=>{
//     console.log(error)
// }
// prom(true).then(onfulfilment)
// prom(true).then(onRejection)
// // console.log(prom(true))
// console.log(prom(false))



 



// let myPromise = new Promise(function(myResolve, myReject) {
//     // "Producing Code" (May take some time)
    
//       myResolve(); // when successful
//       myReject();  // when error
//     });
    
//     // "Consuming Code" (Must wait for a fulfilled Promise)
//     myPromise.then(
//       function(value) { /* code if successful */ },
//       function(error) { /* code if some error */ }
//     );





const prom=new Promise((resolve,reject)=>{
    str=15
    str1=14
    if(str==str1){
        resolve()
    }else{
        reject()
    }

}).then((res)=>{
    console.log("asuccessfully",res)

}).catch((error)=>{
    console.log("Error occornd",error)
})






