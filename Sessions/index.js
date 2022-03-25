const express=require('express')
// const cookieParser=require('cookie-parser')
const session=require('express-session')
const app=express()

// app.use(cookieParser())
app.use(session({secret:'sangeeta@123'}))

app.get('/',(req,res)=>{
    res.send('Welcome to home page')
})


app.get('/session',(req,res)=>{
    if(req.session.counter){
        req.session.counter++
        res.send("You visited this page "+req.session.counter,"times")
    }else{
        req.session.counter=1
        res.send('Welcome to this page for the first time'+req.session.counter)
    }
})

app.listen(3000,()=>{
    console.log('listeing port 3000')
})

