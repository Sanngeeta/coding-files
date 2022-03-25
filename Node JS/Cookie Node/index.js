const express=require('express')
const cookieParser=require('cookie-parser')
const app=express()
app.use(cookieParser())

app.get('/',(req,res)=>{
    // res.cookie('cookie1','sangeeta paswan')
    //expire cookies
    // res.cookie('cookie1','Auyshi',{expire:Date.now()+36000})


    //maxAge ka use bhi expire ki tarah hi hota hia 
    res.cookie('name','Auyshi',{maxAge:36000})
    res.send('cookie has been set')

})


// cookies ko brwouser par yese show kar sakte hai
app.get('/about',(req,res)=>{
    res.send(req.cookies)

})

// Delete cookies  
app.get('/delete',(req,res)=>{
    res.clearCookie('cookie1').send('cookies1 has been deleted')

})





app.listen(2000)