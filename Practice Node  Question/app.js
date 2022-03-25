// // var myPost = new Post({title: 'edureka'});
// // myPost.save(function(err,myInstance){
// // if(err){
// //     console.log(err);
// // //handle error and return
// // }else{
// //     console.log(myInstance);
// // }
// // //go ahead with `myInstance`
// // });



// var url = require('url');
// var adrs = 'http://localhost:8082/default.htm?year=2019&amp;amp;month=april';
// var q = url.parse(adrs, true);
// console.log(q.host); //returns 'localhost:8082'
// console.log(q.pathname); //returns '/default.htm'
// console.log(q.search); //returns '?year=2019 and month=april'
// var qdata = q.query; //returns an object: { year: 2019, month: 'april' }
// console.log(qdata.month); //returns 
// console.log(q);


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

// const k=require('readline-sync')
// const a=k.question('Enter the name:-')

// const prom= new Promise((res,recj)=>{
   
//     if(a=='nav'){
//         res()
//     }else{
//         recj()
//     }
// })
// .then((data)=>{
//     console.log('Macthed Name');
// }).catch((err)=>{
//     console.log('Not Macthed');
// })

// fun=(()=>{
//     console.log('first');
//     fun1=(()=>{
//         setTimeout(()=>{
//             console.log('2 second ');

//         },2000)
//     })
// console.log('second');
// })
// fun()
// fun1()