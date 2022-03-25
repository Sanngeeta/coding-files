const fs=require('fs')
const biodata={
    name:'vinod',
    age:25,
    channel:'thapa technical'


}

// const jsonData=JSON.stringify(biodata)
// console.log(jsonData)

// const object=JSON.parse(jsonData)
// console.log(object)

//convert to JSON
//dusra file me add karna hai
//file ko read karna h
//again covert back to js boject 


const jsonData=JSON.stringify(biodata)
// console.log(jsonData)
fs.writeFile('json1.json',jsonData,(err)=>{
    console.log('done')
})
