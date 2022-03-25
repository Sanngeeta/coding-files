const express=require('express')
const app = express()

// app.get('/:id',(req,res)=>{
//     res.send('The id you specifid is '+req.params.id)

// })


app.get('/things/:name/:id',(req,res)=>{
    res.send('id '+ req.params.id +' and name '+ req.params.name)
})

// Pattern Matched Routes
//using regex to restrict URL to create server macth id it's 5 digit
app.get ('/things/:id([0-9]{5})',(req,res)=>{
    res.send('id '+req.params.id)
})


app.get('/:course_name/courses/:id',(req,res)=>{
    res.send('Course_name '+req.params.course_name+" ID: "+req.params.id)
})




//other routes here
// for showing error sabse last me likhna chahiye 
app.get('*',(req,res)=>{
    res.send(`404 sorry this is an invalid URL`)

})
app.listen(3000)