const mysql=require('mysql')
const controller=require('../controller/user.controller')

con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'133@Sangeeta',
    database:'LoginSignup'

})
con.connect((err)=>{
    if(err) throw err;
        console.log('Database Connected')
})
      