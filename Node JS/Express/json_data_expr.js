//maltipal res ko es tarike se ham likh sakte hai
const express=require('express')
const app2=express()

// app2.get('/',(req,res)=>{
//     //html from me data
//     res.write('<h1>my page welcome</h1>')
//     res.write('<h1>my page welcome kkkk</h1>')
//     // write likhe pr ye expect karta hi ap abhi or data mile. or ye load hota rehta hai
//     res.send()
//     // ager ham res.send ka use karte hai to compelete hone ke bad ye fir stop kar deta hai
// })



app2.get('/',(req,res)=>{
    res.send({
        id:1,
        name:'sangeeta'
    })
})



app2.listen(8000,()=>{
    console.log('listing port 8000 ')
})
