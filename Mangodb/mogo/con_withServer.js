
//Create object
const Student=new Student()
student.name='abhishek'
student.course='nodejs'
student.age=30

student.save()

// One data Read
Student.findOne({name:'john'},(err,doc)=>{
    console.log(doc)
}) 


// Read data ek se jada data read karega
Student.find({age:{$gt:29}},(err,docs)=>{
    console.log(doc)
})



// Update
Student.findOneAndUpdate({name:'john'},{name:'abishek'},{overwrite:true},(err,doc)=>{ //overwrite jaruri h likna ese ilkhne se sab ko overwrite nhi karta hai jisko hame karna hai sif usi ko karta hai 
    console.log(doc)                                                                   //agr ham ese nhi likhate to wo by defoult false le lata hai he
})

// agr hame new update chahiye to uske liye new:ture likhna padta hai warana ye old wale ko hi utha ke de deta hai
Student.findOneAndUpdate({name:'john'},{name:'abishek'},{overwrite:true,new:true},(err,doc)=>{ //overwrite jaruri h likna ese ilkhne se sab ko overwrite nhi karta hai jisko hame karna hai sif usi ko karta hai 
    console.log(doc)                                                                   //agr ham ese nhi likhate to wo by defoult false le lata hai he
})

// One data Delete 
Student.findOneAndDelete({name:'john'},(err,doc)=>{
    console.log(doc);
})






