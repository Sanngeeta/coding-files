// // synchronus

// const fun2=()=>{
//     console.log("sangeeta")

// }

// const fun1=()=>{
//     console.log("paswan")
//     fun2()
//     console.log("new jurniy")
// }
// fun1()

// asynchronus

// // setTimeout asynchronus ke liye jada use hota hai 
// const fun2=()=>{
//     setTimeout(()=> { 
//     console.log("sangeeta")
//     },300)

// }

// const fun1=()=>{
//     console.log("paswan")
//     fun2()
//     console.log("new jurniy")
// }
// fun1()

// console.log(this)


async function data() {
    console.log('My API data')

    const data2= await('my second data')
    console.log(data2)
    
}

data()