
// const path=require('path')
// const express=require('express')
// const app=express()

// const staticPath=(path.join(__dirname,'../views'))

// app.set('view engine','hbs')

// app.get('/about',(req,res)=>{
//     res.render('index')
// })


// app.listen(8000,()=>{
//     console.log('listing the port 8000')
// })





//query string esme ham jo bhi data url par likhte hai use asani se get kar sakte hai 

const path=require('path')
const express=require('express')
const app=express()

const staticPath=(path.join(__dirname,'../views'))

app.set('view engine','hbs')

app.get('/about',(req,res)=>{
    console.log(req.query.name)
    res.render('index',{
        name:req.query.name,
        age:req.query.age

      

    })
})


app.listen(8000,()=>{
    console.log('listing the port 8000')
})

























