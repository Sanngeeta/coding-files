const express=require('express')
const app=express()


app.get("/",(req,res)=>{
    res.send('Hello from the express')
})

app.get('/about',(req,res)=>{
    res.send('Hello this about page')
})


app.listen(3000,()=>{
    console.log('losting the posrt 30000')
})