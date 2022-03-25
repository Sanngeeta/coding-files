const mongoose=require('mongoose')
const validator=require('validator')
// connection creation and creatin a new database
mongoose.connect('mongodb://localhost:27017/mongoDB')
.then(()=>{
    console.log('Connection connect..');
}).catch((err)=>{
    console.log({error:err});
})


// Create Schema or model or collections
// A mongoose shema defines the structure of the document default values,validators,ect..
const playlistSchema=mongoose.Schema({
    name:{
        type:String,       //unique validator nhi h but kaam wahi kar raha hota h
        required:true,
        unique:true,
        lowercase:true,
        uppercase:true,
        tirm:true,//spaces ko hata deta h
        minlength:[2,'minimum 2 letters'],
        maxlength:30

                       

        },
    ctype:{
        type:String,
        required:true,
        lowercase:true,
        enum:['frontend','backend','database'] //user course ka type sirf enhi me se le or dusra na le

    },
    videos:{
        type:Number,
        // validate(value){  //ccustome validation karna 
        //         if(value<0){
        //             throw new error ("Videos count should not be negative")
        //         }
        // },
    //     validate:{ 
    //     validator:function(value){
    //         return value.length<0
    //     },
    //     message:"videos count should not be negative"
    // }

    },
    author:String,
    email:{type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error ('Email is invalid')
            } 
        }
    },
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})

// create models or collectios
const Playlist=new mongoose.model("Playlist",playlistSchema)



// // create document or insert 

const createDocument=async()=>{
    try{

// //     const jsPlaylist=new Playlist({
//         name:'JavaScript',
//         ctype:'Front End',
//         videos:150,
//         author:'Thapa Technical',
//         active:true,
// })
// const mongoPlaylist=new Playlist({
//     name:'MongoDB',
//     ctype:'Database',
//     videos:50,
//     author:'Thapa Technical',
//     active:true,
// })



// const mongoosePlaylist=new Playlist({
//     name:'Mongoose JS',
//     ctype:'Database',
//     videos:5,
//     author:'Thapa Technical',
//     active:true,
// })


const expressPlaylist=new Playlist({
    name:'Express',
    ctype:'Backend',
    videos:15,
    author:'Thapa Technical',
    email:'thapa@gmail.com',
    active:true,
})





    // const result=await Playlist.insertMany([jsPlaylist,mongoPlaylist,mongoosePlaylist,expressPlaylist])
    // console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }




    const result=await Playlist.insertMany([expressPlaylist])
    console.log(result);
    }catch(err){
        console.log(err);
    }
}


createDocument()


// createDocument()




// reactPlaylist.save()
// .then(()=>{
//     console.log('Created new data');
// }).catch((err)=>{
//     console.log(err);
// })






// Data ko read karne ke liye
// getDocument=async()=>{
//     const result=await Playlist.find()
//     console.log(result);

// }
// getDocument()

// getDocument=async()=>{
//     const result=await Playlist.find({ctype:'Front End'})
//     .select({name:1})
//     .limit(1)
//     console.log(result);

// }
// getDocument()


// Comparison query 
// data filter karna hai to
// getDocument=async()=>{
//     const result=await Playlist
//     .find({videos:{$gte:50}}) //greter then 50 equlq to($gte) //less then 50 ($lte:50)
//     .select({name:1})
//     // .limit(1)
//     console.log(result);

// }
// getDocument()


// getDocument=async()=>{
//     const result=await Playlist
//     .find({ctype:{$in:['Backend','Database']}})  //andar jakr sepfaiye data ke liye in compresion ka use kr sakte h
//     .select({name:1})          //$in=jo eske adanr ha wo data dega ....$nin=usko chord kar baki sab dega 
//     // .limit(1)
//     console.log(result);

// }
// getDocument()


// or and opretore
// getDocument=async()=>{
//     const result=await Playlist
//     // .find({$or:[{ctype:'Backend'},
//     // {author:'Thapa Technical'}]})  //$or opretore dono me se ek bhi mil gaya to usko type de dega 
//     .find({$and:[{ctype:'Backend'},
//     {author:'Thapa Technical'}]})
//     .select({name:1})          
//     console.log(result);

// }
// getDocument()




// coount query 
getDocument=async()=>{
    const result=await Playlist
    .find({author:'Thapa Technical'})
    .select({name:1})   
    .count()       
    console.log(result);

}
getDocument()

// sorting Asc/Desc
getDocument=async()=>{
    const result=await Playlist
    .find({author:'Thapa Technical'})
    .select({name:1})   
    // .sort('name : 1')    
    .sort({name:-1})    //negetive desc
    console.log(result);

}
getDocument()








// update documents
const updateDocument=async(_id)=>{
   const result=await Playlist.updateOne({_id},{
       $set:{
           name:'Angular'
       }
   })
   console.log(result);
}
updateDocument("6218d6c99644729c935bd764")


//update by id
updateDocument=async(_id)=>{
    const result=await Playlist.findByIdAndUpdate({_id},{
        $set:{
            name:'Vanilla JS'
        },
        new:true //ese lagne se new wala data print me dega
    })
    console.log(result);
 }
 updateDocument("6218d6c99644729c935bd764")
 
 

// Delete documents

deleteDocument=async(_id)=>{
    try{

        const result=await Playlist.deleteOne({_id:_id})
        console.log(result);

    }catch(err){
        console.log(err);
    }
}

deleteDocument('6218d6c99644729c935bd763')



deleteDocument=async(_id)=>{
    try{

        const result=await Playlist.findByIdAndDelete({_id:_id})
        console.log(result);

    }catch(err){
        console.log(err);
    }
}

deleteDocument('6218d6af06dace30c62ccd08')










// module.exports={Playlist}