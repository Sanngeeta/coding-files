const { create }=require('./user.service')
// ye package jab install karte hai hamara genSaltSync or hasSync work nhi karte hai
// esliye esko import kiya hai
const {genSaltSync,hashSync,salt}=require('bcrypt') 
// bcrypt.hash(newUser.password, salt , (err, hash) => {  }

module.exports={
    createUser:(req,res)=>{
        const body=req.body
        const salt=genSaltSync(10)//ese use password ko show na karne ke liye kiya jata hai
        body.password=hashSync(body.password,salt,(err,hash)=>{

        create(body,(err,results)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message:'Database connection error'
                })
            }
            return res.status(200).json({
                success:1,
                data:results
                })
            
            })
       
        })
    }
}
