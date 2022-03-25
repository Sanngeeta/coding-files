// // Hamre wesite par jitane nav wale page 
// // har ek page ke liye rounting karni padti hai
// // jese about,home,contact,ext

// const express=require('express')
// const app=express()

// // Routing
// app.get('/',(req,res)=>{
//     res.send('This is home page welcome to you')
// })

// app.get('/about',(req,res)=>{
//    res.status(200).send('This is about page welcome to you')
// })

// app.get('/contact',(req,res)=>{
//     res.send('This is contact page welcome to you')
// })




// app.listen(2000,()=>{
//     console.log('listen port 2000')
// })




const express=require('express')
const app=express()

// Routing
app.get('/',(req,res)=>{
    res.send('<h1>This is home page welcome to you</h1>')
})

app.get('/about',(req,res)=>{
   res.status(200).send('This is about page welcome to you')
})

app.get('/contact',(req,res)=>{
    res.send('This is contact page welcome to you')
})

app.get('*',(req,res)=>{
    res.send('404 page not found')
})

app.listen(2000,()=>{
    console.log('listen port 2000')
})