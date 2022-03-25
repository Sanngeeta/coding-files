const mysql=require('mysql')
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'133@Sangeeta',
    database:'mydb'
  })
  
//   con.connect((err)=>{
//     if(err) throw err;
//     console.log('Connected')
//     con.query('CREATE DATABASE mydb',(err,result)=>{
//         if(err) throw err;
//         console.log('Database created')
//     })
//   })
  
  
// con.connect((err)=>{
//     if(err) throw err
//     console.log('Connected')
//     var sql='CREATE TABLE mytable(name Varchar(255),address varchar(255))'
//     con.query(sql,(err,result)=>{
//         if(err) throw err
//         console.log('Table created')
//     })
// })
  

// insert one data in the table
// con.connect((err)=>{
//     if(err) throw err
//     console.log('Connected')
//     var sql="insert into mytable(name,address)values('company INC','Highway 37')";
//     con.query(sql,(err)=>{
//         if(err) throw err
//         console.log('1 record inserted')
//     })
// })



// insert collection of data in the table;
// con.connect((err)=>{
//     if(err) throw err
//     console.log('Connected')
//     var sql="insert into mytable(name,address)values?";
//     var values=[
//         ['John', 'Highway 71'],
//         ['Peter', 'Lowstreet 4'],
//         ['Amy', 'Apple st 652'],
//         ['Hannah', 'Mountain 21'],
//         ['Michael', 'Valley 345'],
//         ['Sandy', 'Ocean blvd 2'],
//         ['Betty', 'Green Grass 1'],
//         ['Richard', 'Sky st 331'],
//         ['Susan', 'One way 98'],
//         ['Vicky', 'Yellow Garden 2'],
//         ['Ben', 'Park Lane 38'],
//         ['William', 'Central st 954'],
//         ['Chuck', 'Main Road 989'],
//         ['Viola', 'Sideway 1633']
//     ]
//     con.query(sql,[values],(err,result)=>{
//         if(err) throw err
//         console.log('Number of record inserted '+result.affectedRows)
//     })
// })

// The Fields Object
// The third parameter of the callback function is an array containing information about each field in the result.



// con.connect((err)=>{
//     if(err) throw err
//     console.log('Connected')
//     con.query('select*from mytable',(err,result,fields)=>{
//         if(err) throw err
//         console.log(result)
//     })
// })




// sort the result

// con.connect(function(err) {
//     if (err) throw err;
//     // con.query("SELECT * FROM mytable ORDER BY name", function (err, result) {
    
//   con.query("SELECT * FROM mytable ORDER BY name DESC", function (err, result){
//       if (err) throw err;
//       console.log(result);
//     });
//   });

// con.connect(function(err) {
//     if (err) throw err;
//     var sql = "DELETE FROM mytable WHERE address = 'Highway 37'";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Number of records deleted: " + result.affectedRows);
//     });
//   });



// table delete karne ke liye
// con.connect(function(err) {
//     if (err) throw err;
//     var sql = "DROP TABLE mytable";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table deleted");
//     });
//   });

// update table
con.connect((err)=>{
    if(err)throw err;
    var sql="update mytable set adress='Canyon 123' where address='Okhala 65'"
    con.query(sql,(err,result)=>{
        if(err) throw err
        console.log('updated'+result.affectedRows)
    })
})