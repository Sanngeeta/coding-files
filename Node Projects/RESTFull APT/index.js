const express=require('express')
const db=require('./database/conn')
const student=require('./models/students')
const app=express()  
const port =process.env.PORT ||8000

app.get('/',(req,res)=>{
    res.send('Welcome to this page')
})

app.post('/students',(req,res)=>{
    res.send('Hello from the other sides.')

})

app.listen(port,()=>{
    console.log(`connection is setup at ${port}`)
})