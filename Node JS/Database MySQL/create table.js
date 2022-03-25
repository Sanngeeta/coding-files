//Create table
// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "133@Sangeeta",
//     database: "NewDatabase"
//   });
  
//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "CREATE TABLE newtable (name VARCHAR(255), address VARCHAR(255))";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });
//   });
  

var con=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'133@Sangeeta',
})

con.connect((err)=>{
  if(err) throw err;
  console.log('Create Database')
  var sql='CREATE DATABASE mydb'
})