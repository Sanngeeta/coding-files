const express=require('express')
const students=require('./students')
const app=express()
app.use(express.json())//ye ek function return karta hai or ye request send hone se pehle chalta hai
// ye body ko object banta hai or request of body ke andr set karta hai


// app.get('/',(req,res)=>{
//     res.json(students)
// })

//get means hame data chahiye esliye ham post ka use karte hai
app.get('/api/students',(req,res)=>{
    res.json(students)
    // res.json({massage:'API IS WORKING'})
})





// post me hame data server(request send karna) pr bhejna hota hai h eliye ham post ka use karte hai
app.post('/api/students',(req,res)=>{
    // console.log(req.body)
    // body ko read karne je liye confiration karna padega eske liye ham
    // midalware ka use karenge
    //object create kiya esko apne data me dalna hai ab

    // error send
    if(!req.body.email){
        res.status(400)
        return res.json({error:'email is require..'})
    }

    const user={
        id:students.length+1, //id automect garent hoga or use plus 1 ho jayega
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email
    }
    // data push karna hai students data me
    students.push(user)
    res.json(user)
})







// put() me ham data ko put karte hai
app.put('/api/students/:id',(req,res)=>{
    let id=req.params.id
    //data update karene ke liye hame pehle data read karna hoga
    let first_name=req.body.first_name
    let last_name=req.body.last_name
    let email=req.body.email
    
    let index= students.findIndex((students)=>{
        return (students.id==Number.parseInt(id))

    })
    if(index>=0){
        //student update karne ka code 
        let std=students[index]
        std.last_name=last_name
        std.first_name=first_name
        std.email=email
        res.json(std)
    }else{
        //agr update nhi hota hai to error show karna chahie
        res.status(404)
        res.send()
        // res.json({error:''})
    }

    console.log(id)
    res.json(id)
})


// delete data
app.delete('/api/students/:id',(req,res)=>{
    let id= req.params.id
    let index1= students.findIndex((students)=>{
        return (students.id==Number.parseInt(id))
    })
    if (index1>=0){
        let std=students[index1] 
        students.splice(index1,1)
        res.json(std)
    }else{
        res.json(404)
    }

})








app.listen(8000,()=>{
    console.log('port liesting')
})


