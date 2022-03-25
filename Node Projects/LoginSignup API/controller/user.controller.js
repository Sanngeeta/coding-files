
const knex=require('../config/table')

select=(req,res)=>{
    knex.select("*").from('usersTable')
    .then((data)=>{
        res.send(data)
        console.log(data)
    }).catch((err)=>{
        res.send(err)
        console.log(err)
    })

    
}

create=(req,res)=>{
    const users={
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password
    }
    knex('usersTable').insert(users)
    .then((data)=>{
        res.send({succes:'user signup succsfully',Signup:req.body.firstName})
        console.log(data)
    }).catch((err)=>{
        res.send(err)
    })       
}


login=(req,res)=>{
    knex.select('*').from('usersTable').where('email','=',req.body.email,'password','=',req.body.password)
    .then((data)=>{
        console.log(data)
        res.send({message:'login successfully',userdata:data})
    }).catch((err)=>{
        res.send({Error:'Please fill all fields'})
    })
}
   

    

dele=(req,res)=>{
   knex.delete('*').from('usersTable').where('id','=',req.params.id)
   .then((data)=>{
       console.log(data)
       res.send({meassge:'user data delete succfully',delete:data})
   }).catch((err)=>{
       console.log('error')
   })

}


Update=(req,res)=>{
    knex('usersTable').where('id','=',req.params.id).update({id:req.body.id,firstName:req.body.firstName,lastName:req.body.lastName,email:req.body.email,password:req.body.password})
    .then((data)=>{
        console.log(data)
        res.send({meassge:'updated succfully',updated:data})
    }).catch((err)=>{
        console.log('error')
    })
}

module.exports={select,create,login,dele,Update}
