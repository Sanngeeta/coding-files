// console.log("This is my Page")
// async function harry(){
//     console.log('Inside harry function')
//     const response=await fetch('https://jsonplaceholder.typicode.com/posts')
//     console.log('before response')
//     const user=await response.json()
//     console.log('user resolve')
//     return user

// }
// harry()
// console.log('before calling harry')
// let a=harry()
// console.log('after calling harry')
// console.log(a)
// a.then(data=> console.log(data))
// console.log('last line of this js file')

// async function f() {
//     console.log('Async function.');
//     return Promise.resolve(1);
// }

// f(); 





// // async/await Promises ke data ko essliy fetch karne ke liye use kiya jata hai 
//  async function getData(){
//      const rollno=await projes
//      console.log(roll_no)//YE roll no li list ka data dega async and await karne pr.
     
//      const biodatas=await getBiodata(roll_no[1])
//      console.log(biodatas)////YE student ke name or age dega list ka data dega async and await karne pr.



//     return getBiodata;
//     //jab ham yese promise ke data ko fecth karne ki koshis karte hai to ham kuch es  tarah likhte hai
    
//  }

// getData()
// const getname=getData()
// console.log(getname) //or esme is raha function ko call karte hai par jada tar yese me hamra data pending me dikhta hai h becosue 
// //ye awit karne ha data ko reslove krne me .

// //Agar ham chate hai hamra data pending me nhi balki data fetch kar ke de to hamkuch 
// //es tarah use kar sakte hai he like hame than() and catch() ka use kr sakte hai.
// const getname=getData().than((myname)=>{
//     console.log(myname)
// })


// async function getMul() {
//     for (let i = 0; i < 50; i++) {
//       try {
//         let res = await(i, i + 1);
//         console.log('i=', i, 'res: ', res);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   }
//   getMul();



// async function test(){
//     console.log("2: massesge")
//     await console.log("3: massesge")
//     console.log("4: massesge")//yaha per ye wait kr rha hai  
//                               //await methed ka use hm tb karte hai jb hme server se data fatch karna hota hai
//   }
//   console.log("1: massesge")
//   test()
//   console.log("5: massesge")

// async function test() {
//     console.log('2 Data')
//     await console.log('3 Data')
//     console.log('4 Data')
    
// }
// console.log('1 Data')
// test()
// console.log('5 Data')


// async function test(){
//     await console.log('second');
//     console.log('first');
// }
// console.log('third');
// test()