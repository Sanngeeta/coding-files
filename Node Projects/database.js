const mysql=require('mysql')
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'133@Sangeeta',
    database:'fbdb'
  })
  
  con.connect((err)=>{
    if(err) throw err;
    console.log('Connected')
    con.query('CREATE DATABASE fbdb',(err,result)=>{
        if(err) throw err;
        console.log('Database created')
    })
  })
  
  
con.connect((err)=>{
    if(err) throw err
    console.log('Connected')
    var sql = "CREATE TABLE fbtable (name VARCHAR(255), gamil VARCHAR(255),gender VARCHAR(255),password VARCHAR(255))"
    con.query(sql,(err,result)=>{
        if(err) throw err
        console.log('Table created')
    })
})
  