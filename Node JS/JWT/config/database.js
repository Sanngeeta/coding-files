const{createPool} =require('mysql')
const pool=createPool({
    port:process.env.DB_PORT,
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.MYSQL_DB,
    connectionLimit:10

})
// Agr hame ye sari information save rakhna jese ham github par dalte hai or hame ye information visibale nhi karna to uske liye 
// hame npm insatll dotnav insatll karna hoga 
module.exports=pool;
