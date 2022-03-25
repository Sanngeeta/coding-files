// const status = response => {
//     if (response.status >= 200 && response.status < 300) {
//       return Promise.resolve(response)
//     }
//     return Promise.reject(new Error(response.statusText))
//   }
  
//   const json = response => response.json()
  
//   fetch('/todos.json')
//     .then(status)    // note that the `status` function is actually **called** here, and that it **returns a promise***
//     .then(json)      // likewise, the only difference here is that the `json` function here returns a promise that resolves with `data`
//     .then(data => {  // ... which is why `data` shows up here as the first parameter to the anonymous function
//       console.log('Request succeeded with JSON response', data)
//     })
//     .catch(error => {
//       console.log('Request failed', error)
//     })

//promise chaning ek se jada jab promise use karte hai to wo  hota h promise chaning
// const fetch=require('node-fetch');
//   let data=fetch('https://jsonplaceholder.typicode.com/posts')
//   data.then((item)=>{
//       return item.json()
//   }).then((result)=>{
//       console.log(result)
//   })


//Promise.all (ye array ka object leta hai or sare promise ko chack karne ke bad agar sari promise resolve hote hai to
//lo bhi last ka setTimeout ka jo time hota hai usko pura karne ke bad result de deta hai)
//emse agar ek bhi condition reject hota hai ye sidha ctach me jakar uska result de deta hai or fir ese jo resovle hiye condition hote hai use koi matlb nhi hota hai 
// Promise.all
// Promise.allSettled
// Promise.race (jo sabse pehle resove ho raha h uska hi result de bas)

// let data=Promise.race([
// //.allSetted ka use kar ke.
// //agar hame ye dekhna ho ki jo recject hai wo show ho leing jo resvlove hai wo bhi show like the both have to show
// //par time 4 seco wala hi leta hai
//     new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('2 second')
//         },2000) 
//     }),
//     new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('1 second')
//         },1000)
//     }),
//     new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('4 second')
//         },4000)
//     })

// ])
// data.then((item)=>{
//     console.log('then block',item)

// }).catch((err)=>{
//     console.log('catch block',err)
// })
  

// Promise.any()
const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));
