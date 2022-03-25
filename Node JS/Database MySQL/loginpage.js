// const mysql=require('mysql')
// var con=mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'133@Sangeeta',
//     database:'mydb'
//   })
// con.connect((err)=>{
//     if(err) throw err;
//     console.log('Connected')
//     con.query('CREATE DATABASE logindb',(err,result)=>{
//         if(err)throw err;
//         console.log('Database created')

        
//     })
// })

const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.render('signup')
})
