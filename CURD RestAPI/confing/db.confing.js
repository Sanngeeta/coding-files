const mysql=require('mysql')

// create here mysql  connection
const dbConn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'133@Sangeeta',
    database:'Ragistations'
})

dbConn.connect((err)=>{
    if(err)throw err
    console.log('Databases connected Successfully')
    
    
})
module.exports=dbConn;


// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     //create database
//     con.query("CREATE DATABASE NewDatabase", function (err, result) {
//       if (err) throw err;
//       console.log("Database created");
//     });
//   });
  
  
  