const express=require('express')
const app=express()

app.set('view engine','ejs')
//dynmic cantacn
app.get('/profile/:name',(req,res)=>{
    console.warn(req.params.name)
    res.render('profile',{name:req.params.name})
})

app.listen(4000)