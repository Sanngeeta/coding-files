const express=require('express')
const app=express()

//query string esme ham jo bhi data url par likhte hai use asani se get kar sakte hai 

app.get('/',(req,res)=>{
    res.send('Home page')

})

 
app.get('/about',(req,res)=>{
    console.log(req.query.name) //http://localhost:2000/about?name=delhi&second=mombai
    res.send(`<h1>Welcome about page${req.params.name}</h1>`)

})

app.listen(2000,()=>{
    console.log('port listing 2000')
})