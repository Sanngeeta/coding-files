const pool= require('../../config/database')
module.exports={
    create:(data,callback)=>{
        pool.query(
            'insert into registration (firstName,lastName,gender,email,password,number) values(?,?,?,?,?,?)',
            [
                data.firstName,
                data.lastName,
                data.email,
                data.password,
                data.number
            ],
            (error,result,fields)=>{
                if(error){
                   return callback(error)
                }
                return callback(null,result)
            }
        )
    }
}