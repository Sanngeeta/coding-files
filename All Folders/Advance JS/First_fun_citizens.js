

//2. Passs a function as an argument
// const myName=()=>{
//     return "Hello"

// }
// const greeting =(sayHi,name)=>{ 
//     console.log(sayHi()+name)
// }
// greeting(myName,"sangeeta")
//Jo myName hai wo callback function kehlata hai


//3 returning function 

function a(){
    
    return function b (){
        console.log('Thank you so much  for your love')
    }
}

//We have two type for thi function calling
//.1 first 
a()()

//.2 second
const c=a()
c()