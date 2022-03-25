const bodyParser = require('body-parser')
const express=require('express')
const app=express()
// setup the sever port
const port=process.env.PORT || 3000

// parser request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({extended:false}))

// parser request data content type application/json
app.use(bodyParser.json())



// route root for server
app.get('/',(req,res)=>{
    res.send('Hello world')
})

// import employee routes
const employeeRoutes=require('./Src/routes/employee.route')

// create  employee routes
app.use('/api/v1/employees',employeeRoutes)




app.listen(port,()=>{
    console.log(`connection is setup at ${port}`)
})