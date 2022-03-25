// static webs ko server pr show karne ke liye

const path=require('path')
const express=require('express')
const app=express()
// absolute path 

// kisi bhi file or folder ko cancet karne ke liye ham yese kar sakte hai
const staticPath=(path.join(__dirname,'../public'))

// builtin moddleware
app.use(express.static(staticPath))

app.get('/',(req,res)=>{
    res.send('Hello')
})


app.listen(8000,()=>{
    console.log('listing the port 8000')
})