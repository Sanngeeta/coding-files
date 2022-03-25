// // Schema difined

// const mysql=require('mysql')
// const Schema=mysql.Schema;
// const validator=require('validator')
// const studentsSchema=new mysql.Schema({
//     name:{
//         type:String,
//         required:true,
//         minlength:3
//     },
//     email:{
//         type:String,
//         required:true,
//         unique:[true,'Email id already presnt'],
//         validate(value){
//             if(validator.isEmail(value)){
//                 throw new Error('Invaild Email')
//             }
//             }

//         },
//         phone:{
//             type:Number,
//             min:10,
//             max:10,
//             required:true,
//             unique:true
//         },
//         address:{
//             type:String,
//             required:true,

//         }
    
// })

// //we will create a new conection 

// const student =new mysql.model('Student',studentsSchema)

// module.exports=student;
