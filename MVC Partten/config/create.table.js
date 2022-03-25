const mysql=require('mysql')
const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'133@Sangeeta',
    database:'employeeDB'
})


con.connect((err)=>{
    if(err) throw err;
    console.log('Connected')
    var sql='CREATE TABLE employees (id BIGINT UNSIGNED AUTO_INCREMENT,first_name VARCHAR(255) NOT NULL,last_name VARCHAR(255) NOT NULL,email VARCHAR(255) NOT NULL, phone VARCHAR(255) NOT NULL,organization VARCHAR(255) NOT NULL,designation VARCHAR(255) NOT NULL, salary DECIMAL(11,2) UNSIGNED DEFAULT 0.00, status TINYINT UNSIGNED DEFAULT 0, is_deleted TINYINT UNSIGNED DEFAULT 0, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,PRIMARY KEY(id) ) '
    con.query(sql,(err,result)=>{
        if(err) throw err;
        console.log('Table careted')
    })

    
})
