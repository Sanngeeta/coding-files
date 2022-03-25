//esme ham Asynchronous CRUD Operations file system ka use karenge .


// //craeted floder in Asynchronous curd.
const fs=require('fs')
// fs.mkdir('Thapa',(err)=>{
//     console.log('folder created')
// })


// // // //create to file in Asynchronous
// fs.writeFile('./Thapa/bio.txt','my name arohi',(err)=>{
//     console.log('file is create')
// })

// // //append the data in Asynchronous my file
// // fs.appendFile('./Thapa/bio.txt','i append this data in my file',()=>{
// //     console.log('filrs data apppend')
// // })

// //read data in my folder
// fs.readFile('./Thapa/bio.txt','utf-8',(err,data)=>{
//     console.log(data)
// })


// // //rename the file or folder
// fs.rename('./Thapa/bio.txt','./Thapa/sangeeta.txt',()=>{
//     console.log('rename done')

// })


//Delete any file Asynchronous
fs.unlink('./Thapa/sangeeta.txt',(err)=>{
    console.log('delete file succuesfuly')

})

//delete folder in Asynchronous

fs.rmdir('Thapa',(err)=>{
    console.log('delete folder done')
})