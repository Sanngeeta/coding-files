const express=require('express')
const router=require('./routes/routes.users')

const app=express()

app.use(express.json())
app.use("/",router)

app.listen(3000,"localhost",()=>{
    console.log('Port listinig 3000')
})