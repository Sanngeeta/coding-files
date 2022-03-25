const router=require('express').Router()
const {check,validationResult}=require('express-validator')
const{users}=require('../db')
const find=require('find')
router.post('/signup',[
    //check validation 
    check('email',"Please provide valid email").isEmail(),
    check('password',"Please provide a password that is greater than 5 character").isLength({
        min:6
    })

],(req,res)=>{
    const{password,email}=req.body


    // VALIDATED THE  INPUT
    const error=validationResult(req)
    if(!error.isEmpty()){
        return res.status(400).json({
            error:error.array()
        })
    }    

    // validatie if user dont's already exits
    let user=users.find((user)=>{
        return user.email===email

    })
    if(!user){
        res.status(400).json({
            
                "error": [
                    {
                        "msg": "This user already exist",
                        
                    }
                ]
            

        })
    }
    res.send('Validation Pass')
})


module.exports=router