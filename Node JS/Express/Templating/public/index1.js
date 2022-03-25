// dynmic website templeteing se kiya jata hai
const path=require('path')
const express=require('express')
const app=express()
// absolute path 

// kisi bhi file or folder ko cancet karne ke liye ham yese kar sakte hai
const staticPath=(path.join(__dirname,'../public'))

// To set the view engine route
app.set('view engine', 'hbs');



// template engine route
app.get ('',(req,res)=>{
    res.render('index')
})


app.get('/',(req,res)=>{
    res.send('Hello for the express')
})



app.listen(8000,()=>{
    console.log('listing the port 8000')
})