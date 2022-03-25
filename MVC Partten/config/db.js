const mysql=require('mysql')

const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'133@Sangeeta',
    database:'students'
    
})

con.connect((err)=>{
    if(err) throw err;
    console.log('Database Connected')

})

module.exports=con;