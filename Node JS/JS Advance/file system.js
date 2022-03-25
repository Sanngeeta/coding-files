//jab bhi ham asycron work karte hai to hame callback ko use kr call karna hi hota h
const fs=require('fs')
fs.writeFile('read.txt','today is thursday',(err)=>{
    console.log('file is created')

})

//We pass them a function as an argument -a callback -
//that gets called when that task completes.
//the callback has an argument that tells you whether the
//operation completed succesfully.
//Now we need to say what to do when fs.writeFile has completed 
//(even if it's nothing),and start checking for error.

fs.appendFile('read.txt','my name is navgurukul',()=>{
    console.log('task completed')
})

fs.readFile('read.txt','utf-8',(err,data)=>{
    console.log(data)//read karne me hame 2 argumnets use karna hi hota hai ek data ke liye ek error ke liye.
     
})
