const express=require('express')
const app=express()
const session=require('express-session')

// set session
//midalware
app.use(session({secret:"[(Gw&;Z3!=634z=3" }))

// Rounting
app.get('/',(req,res)=>{
    res.send('Welcome to home page')
})

// count session (user ne kitani bar es url pr visit kiya h use count karega)
app.get('/session_test',(req,res)=>{
    if(req.session.count){
        req.session.count++
        res.send('count: '+req.session.count)//(ye part jab run hoga jab ap ek bar pehle bhi espr visi kar chuke honge)

    }else{
        req.session.count=1
        res.send('Welcome first time count:'+req.session.count) //clint first agr visit karega to ye run hoga 

    }
})

// Running server
app.listen(9000)