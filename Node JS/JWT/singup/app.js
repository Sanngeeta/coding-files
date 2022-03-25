const express=require('express')
const auth=require('./routes/auth')
const app=express()

app.use(express.json())
app.use('/auth',auth)


app.get('/',(req,res)=>{
    res.send('hii i am working')
})


app.post('/sing')
app.listen(5000,()=>{
    console.log('Now running on port 5000')
})