const {User}=require('../models/sechma')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const cookie = require('cookie-parser')

// createUsers=(req,res)=>{
//     const newUsers=new users(req.body)
//     newUsers.save()
//     .then((data)=>{
//         res.status(201).send({
//             message:'New user created',
//             user:data
//         })
//     }).catch((err)=>{
//         console.log(err);
//         res.send({message:'Email already exits!'
      
//         })
//     })

// }

createUsers=(req,res)=>{
    bcrypt.hash(req.body.password,10,(err,haspass)=>{
        if(err){
            res.json({message:err})
        }
        const newUsers=new User({
            name:req.body.name,
            email:req.body.email,
            password:haspass
        })
        newUsers.save()
        .then((data)=>{
            res.status(201).send({
                message:'User Added Successfully!',
                user:data
            })
        }).catch((err)=>{
            console.log(err);
            res.send({message:'Email already exits!'
          
            })
        })

    })

   

}



userLoing=(req,res)=>{
    var email=req.body.email
    var password=req.body.password
    User.findOne({email:email})
    .then((userData)=>{
        console.log(userData);
        bcrypt.compare(password,userData.password,(err,result)=>{
           
            if(err){
                res.send({error:'Invalid Password'})
            }else{
                if(result){
                    let token=jwt.sign({id:userData._id},'sangeetapaswan', {expiresIn: '6h'})
                    res.cookie("user",token)
                    res.json({
                        message:'Login Successful!',
                        userDetails:userData,
                        Token:token
                    })
                }else{
                    res.json({
                        message:'Password does not matched!'
                    })
                }
            }
        })

    }).catch((err)=>{
        console.log(err);
        res.json({message:'User not found'})
    })

    
}




findUserDocuments=(req,res)=>{
    User.find()
    .then((data)=>{
        res.send({message:data})
    }).catch((err)=>{
        res.send({message:err})
    })


}

findUserbyID=(req,res)=>{
    User.findById({_id:req.params._id})
    .then((userByid)=>{
        res.send({message:'User by id',
        userByid:userByid})
    }).catch((err)=>{
        console.log(err);
        res.send({message:err})
    })
}


updateUserByID=(req,res)=>{
    const _id=req.params.id
    User.findByIdAndUpdate(_id,req.body)
    .then((update_data)=>{
        console.log(update_data);
        res.send({message:'User updated succesfully!',
        updated:update_data})
    })
}


delDocuments=(req,res)=>{
    User.findByIdAndDelete(req.params.id)
    .then((delData)=>{
        if(!req.params.id){
            return res.status(400).send('This id not exits!')
        }else{
            res.send({message:'User deleted',
                del:delData})
        }
        

    }).catch((err)=>{
        res.status(500).send({error:err})
    })
    
    
}

module.exports={createUsers, findUserDocuments, findUserbyID,updateUserByID, delDocuments,userLoing}