// // // Higher-order function that take other function as arguments or return function as their result.

// // const interviewQuestion=(name)=>{
// //     if (name==="vinod"){
// //         return  function(topic){   //if any funtion return in result to function so it's call higer order function
// //             console.log(`Hii ${name}.What is ${topic}?.please explain us.`)

// //         } 
// //     }
// //     if (name==="Rahul"){
// //         return  function(topic){   //if any funtion return in result to function so it's call higer order function
// //             console.log(`Hii ${name}.What is ${topic}?.please explain us.`)

// //         } 
// //     }
// //     if (name==="Arman"){
// //         return  function(topic){   //if any funtion return in result to function so it's call higer order function
// //             console.log(`Hii ${name}.What is ${topic}?.please explain us.`)

// //         } 
// //     }else{
// //         return function(){
// //             console.log("Welcome to interwivew")
// //         }
// //     }

// // }

// // //For the calling function we have two type for the calling
// // // //the first one:-
// // // interviewQuestion("vinod")("UI")
// // // interviewQuestion("Rahul")("Full stack Developer")
// // // interviewQuestion("Arman")("Front End Developer")

// // //Secon one:- We can take any veriable store them function and call it .    
// // const cand1=interviewQuestion("vinod") //If you use this calling method so you can ask maltipal questions.
// // cand1("UI") //if you wnat to ask more than question form one person you can do it like that:-
// // cand1("Ux") 
// // cand1("Javascript")  



// // Higer oder function 
// // function which take another function as argument is calles (HOF)

// // call back function 
// // fucntion which get passed as an arugumnet to antoher function is calles(CBF)
// const add=(a,b)=>{
//     return a+b
// }

// const subs=(a,b)=>{
//     return Math.abs(a-b)
// }

// const malti=(a,b)=>{
//     return a*b
// }

// const modu=(a,b)=>{
//     return a%b
// }


// //matser function

// const calculator=(num1,num2,operator)=>{ //It,s higer oderd function
//     return operator(num1,num2)
// }

// console.log(calculator(12,20,add)) //Call the add function in a calculator function as arugment is a call back function

