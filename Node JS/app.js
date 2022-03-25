const express=require('express')
const bodyParser=require('body-parser')

const app=express()

// middlware/routing
app.set('view engine','pug')
app.use(bodyParser.urlencoded({ extended:true })) //?5+

app.get('/',(req,res)=>{
   return res.redirect('/form-with-get')
})



app.get('/form-with-post',(req,res)=>{
   return res.render('form-with-post')
})



app.get('/form-with-get',(req,res)=>{
   return res.render('form-with-get')
})





app.get('/form-with-get',(req,res)=>{
   return res.send(req.query) //?first=sangeetalast=paswan
})



app.listen(6000,()=>{
   console.log('my servce is runing port 6000')
})
