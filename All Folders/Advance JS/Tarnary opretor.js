// const k=require("readline-sync")
// const user=k.question('Enter the number:-')
// let result=(user%7===0)? 'Its divisible': 'not divisible'

// console.log(result)



// var array=[2,4,6,7,8]

// i=0
// do{
//     console.log(array[i])
//     i=i+1
// }
// while(i<array.length)

// const fun=((a,b)=>{
//     c=a+b
//     return c
// })
// console.log(fun(10,20))

// a=NaN
// console.log(a)


// function myfun(...arry) {
//     console.log(arry)
    
// }
// myfun(1,3,5,7,9,10,23)

// var a='navgurukul'
// var b=a-1
// console.log(b)

//Asycoronus 
// const myfun=()=>{
//     setTimeout(()=>{
//     console.log('your roll no')
// },3000)
   
// }
// fun2=()=>{
//     console.log('fun2 is printing')
//     myfun()
//     console.log('fun1 is print')

// }
// fun2()




// for (i=1;i<=50;i++){
//     const result=(i%2===0)? `Even no ${i}`:`Odd no ${i}`
//     console.log(result)

// }








// i=1
// do{
//     i=i+1
//     console.log("Even",i)

// }while(i<=50){
//     if(i%2===0){
        
//     }
// }



// function Person(first, last, age, eyecolor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyecolor;
//   }
  
//   const myFather = new Person("John", "Doe", 50, "blue");
//   const myMother = new Person("Sally", "Rally", 48, "green");



// console.log(myFather)
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys();

// for (let x of keys) {
//     console.log(x) 
//   }


// k=Symbol("id") == Symbol(3) 
// console.log(k)
// console.log(typeof(k))


// k=Symbol(10)
// console.log((k))





// const prom=new Promise((resolve,reject)=>{
//     const num=require('readline-sync')
//     const a=num.question('Enter the number:-')
//     if (a%2==0){
//         resolve()
        
//     }else{
//         reject()
//     }
// })
// prom.then((res)=>{
//     console.log('Even number')
// }).catch((errer)=>{
//     console.log('odd number')

// })

//Promise ka use kar ke data fecth karna
// const axios=require('axios')

// function data() {
//     const DATA=axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
//         console.log(res)
//     })
//     .catch((error)=>{
//         console.log(error)
//     })
 
// }
// data()

const fetch=require('fetch')

async function fetchMovies() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    console.log(response);
  }

fetchMovies()
// async function getData() {
//     user=[]
//     try{
//         user=await fetchMovies()
//     }catch(e){
//         console.log('Error')
//         console.log(e)
//     }
//     console.log(user)
// }
// getData()