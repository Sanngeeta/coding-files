const express=require('express')
const jwt=require('jsonwebtoken')
const app=express()

app.get('/api',(req,res)=>{
    res.json({
        text:'my api'
    })
})


app.post('/api/login',(req,res)=>{
    const user={id:3}
    const token=jwt.sign({user},'my_secret_key')
    res.json({
        token:token
    })
})

app.get('/api/protected',ensureToken,function(req,res){
    jwt.verify(req,token,'my_secret_key',function(err,data){
        if(err){
            res.sendStatus(403)
        }else{
            res.json({
                text:'this is protected',
                data:data
            })
        }
    })
})

function ensureToken(req,res,next){
    const beareHeder=req.headers['authorization']
    if(typeof beareHeder!=='undefined'){
        const bearer=beareHeder.split("")
        const bearerToken=bearer[1]
        req.token=bearerToken
        next()
    }else{
        res.sendStatus(403)
    }

}




app.listen(3000,()=>{
    console.log('3000 port listing')
})