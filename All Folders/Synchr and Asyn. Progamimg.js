// //Synchronc
//ye synchro version me use karne ka tarika h
const fs=require('fs')
// const data=fs.readFileSync('my.txt','utf-8')
// console.log(data)
// console.log('after data')





//Asyncronce
//ye async version me use karne ka trika h
fs.readFile('my.txt','utf-8',(err,data)=>{
    console.log(data)

})
console.log('after the data') //asyncr wait nhi karta h jo pese ho jate hai use print kar deta hai
