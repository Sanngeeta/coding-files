const express=require('express')
const {select,create,login,dele, Update}=require('../controller/user.controller')
const router=express.Router()

router.post('/signup',create)


router.get('/',select)

router.delete('/delete/:id',dele)

router.post('/login',login)


router.put('/update/:id',Update)


module.exports=router