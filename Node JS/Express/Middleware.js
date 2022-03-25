// // const { response } = require('express');
// var express = require('express');
// var app = express();

// const reqFilter=(req,res,next)=>{
//    // console.log('reqFilter')
//    if(!req.query.age){
//       res.send('Please provid page')
//    // }else if(req.query.age<18){
//    //    res.send('you can not access this page')

//    }else{

//    }
//    next()
// }
// app.use(reqFilter)

// app.get('/',(req,res)=>{
//    res.send('Welcome to home page')
// })

// app.get('/users',(req,res)=>{
//    res.send('welcome to users page')
// })
// app.listen(5000)



var express = require('express');
var app = express();

//Middleware function to log request protocol
app.use('/things', function(req, res, next){
   console.log("A request for things received at " + Date.now());
   next();
});

// Route handler that sends the response
app.get('/things', function(req, res){
   res.send('Things');
});

app.listen(7000);