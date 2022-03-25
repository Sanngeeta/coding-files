var express=require('express')
var app=express()

app.get('/',(req,res)=>{
    var err=new Error('Something went wrong')
    next(err)
})

//other route handlers and middleware here

//An error handling middleware
app.use((err,req,res,next)=>{
    res.status(500)
    res.send('Oops,Something went wrong')
})
app.listen(3000)