var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "133@Sangeeta",
  database: "youtuber"
});

con.connect(function(err) {
  if (err) throw err;
  /*Connect two tables by using one field from each table as the connection point:*/
  var sql = "SELECT newtable.name AS user, datatable.name AS favorite FROM newtable JOIN datatable ON newtable.favorite_product = datatable.name";  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});



// //Create table
// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "133@Sangeeta",
//     database: "youtuber"
//   });
  
//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql='INSERT INTO datatable (name,address) VALUES?'
//     var values=[
//     ['Subhashni', 'Highway 51'],
//     ['preeti', 'Lowstreet 4'],
//     ['nisha', 'Apple st 652']]
//     con.query(sql,[values],function(err,result){
//           if (err) throw err
//           console.log('Number of recods'+result.affectedRows)
//           console.log(result)
          
//         })
//       })
      