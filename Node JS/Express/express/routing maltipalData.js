
const express=require('express')
const app=express()

// Routing 
//maltipal data bhejna ke liye write ka use karte 
app.get('/',(req,res)=>{
    res.write('<h1>This is home page welcome to you</h1>')
    res.write('<h1>This is again home page welcome to you</h1>')
    res.send() //ese last me esliye lagte hai taki agr jo write or data mang raha hai use stop kar sake

})

app.get('/about',(req,res)=>{
   res.status(200).send('This is about page welcome to you')
})

app.get('/contact',(req,res)=>{
    res.send('This is contact page welcome to you')
})




app.get('/json',(req,res)=>{
    res.send({
        id:1,
        name:'vinod'
    })
})



app.get('/json1',(req,res)=>{
    res.send([
        {id:1,
        name:'vinod'},

        {
            id:1,
            name:'vinod'
        },

        {
            id:1,
            name:'vinod'
        }
        
    ])

    
})




app.listen(3000,()=>{
    console.log('listen port 3000')
})