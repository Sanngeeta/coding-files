var mysql=require('mysql')

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "133@Sangeeta",
  database: "fbdb"
});


const user=require('readline-sync')
const choose=user.questionInt('singup-1 or login-2 ')
if (choose===1){

  con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!")
  const input=require('readline-sync')
  var name=input.question('Enter the name:')
  var gmail=input.question('Enter the email id: ')
  var gender=input.question('Enter the gender:')
  var password=input.question('enter your password:')
  var sql='INSERT INTO fbtable (name,gmail,gender,password) VALUES?'
  var values=[name,gmail,gender,password]
  con.query(sql,[values],(err,result)=>{
    console.log({message:'Data inserted'})
  })
})

}else{
  if(choose===2){

  }
}