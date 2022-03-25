const express=require('express')
const app=express()
const mongoose=require('mongoose')
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/mydb',{useNewUrlparser:true})

// for careteiing schema we have to require
const studentSchema=new mongoose.Schema({
    name:String,
    age:Number,
    course:String
})

const Student=new mongoose.model('Student',studentSchema)



app.listen(8000,()=>{
    console.log('Server Started')
})
