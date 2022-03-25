const express=require('express')
const app=express()
const cookieParser=require('cookie-parser')

// cookieParser setup
app.use(cookieParser())

// Routing
// cookies banane ke liye res ka use hota hai becouse of us time ham server se clinte ke siad jate hai
app.get('/cookie_test',(req,res)=>{
    res.cookie("username","sangeeta paswan")
    // res.cookie("username","sangeeta paswan",{maxAge:10000}) //value ko expriceing krsakte hai
    res.cookie("password","57832")

    res.send('cookie set...')
})

// cookies ke data ko access karne ka code
app.get('/cookie_check',(req,res)=>{
    // res.send('value: '+JSON.stringify(req.cookies))//data json ke from ho jayga fir data sahi se aayega
    res.send('value: '+(req.cookies.username))//agr data json me nhi chaiye normle sa cahiye
    console.log(req.cookies)
})



// cookies clear
app.get('/cookie_clear',(req,res)=>{
    res.clearCookie('username')
    res.send('value :'+req.cookies.username)
    console.log(req.cookies)
})


app.listen(7000,()=>{
    console.log('port liesting')
})