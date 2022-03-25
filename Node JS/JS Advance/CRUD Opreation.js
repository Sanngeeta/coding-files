//esme ham Synchronous CRUD Operations file system ka use karenge .


// // For  Creatning a folder 
// const fs =require('fs')
// fs.mkdirSync('Arohi_Rawat',(err)=>{
//     console.log('folder created')

// })


// 2.  

// fs.writeFile('/.Arohi_Rawat/Bio.txt',"My name is sangeeta",(err)=>{
//     console.log('file created')

// })


//For  Creatning a folder 
const fs =require('fs')
// fs.mkdirSync('Arohi_Rawat')
 

//for creating file
fs.writeFileSync("Arohi_Rawat/Bio.txt","my name is sangeeta")


//data add karne ke liye
// fs.appendFileSync("Arohi_Rawat/Bio.txt","Plase like and subscribe to my channel")


// for reding data 
// data=fs.readFileSync("Arohi_Rawat/Bio.txt","utf8")
// console.log(data)


//Rename the file 
// fs.renameSync("Arohi_Rawat/Bio.txt","Arohi_Rawat/bio1.txt")


//Delete file
// fs.unlinkSync("Arohi_Rawat/bio1.txt")


//folder delete karne ke liye
fs.rmdirSync("Arohi_Rawat")