const employee=require('../models/employee.model')
exports.findAll=()=>{
    employee.findAll((err,employee)=>{
        console.log('controller')
        if(err)
        res.send(err)
        console.log(employee)
        res.send(employee)
    })
}

//employee create karne ke liye
exports.create=(req,res)=>{
const newEmployee=new employee(req.body)
    

    //handles null error
    if(req.body.constructor==Object && Object.keys(req.bod).length===0){
        res.status(400).send({error:true,message:'Please fill all required field'})
    }else{
        employee.create(newEmployee,(err,employee)=>{
            if(err){
                res.send(err)

                res.json({error:false,message:'Employee added successfully',data:employee})
            }
        })
    }



}

//employee me update karne ke liye
exports.update=(req,res)=>{
    if(req.body.constructor===Object && Object.keys(req,body).length===0){
        res.status(400).send({error:true,message:'please fill all required field'})
    }else{
        employee.update(req.params.id,new employee(req.body),
        (err,employee)=>{
            if(err){
                res.send(err)
                res.json({error:false,message:'Employee successfully updated'})
            }
        })
    }

}


exports.delete=(req,res)=>{
    employee.delete(req.params.id,(err,employee)=>{
        if(err){
            res.send(err)
            res.send({error:false,message:'Employee successfully deleted'})
        }
    })

}