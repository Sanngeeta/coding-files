const mongoose=require('mongoose')
const validator=require('validator')
mongoose.connect('mongodb://localhost:27017/BlogApp')
.then(()=>{
    console.log('Connection Succesfully..');
}).catch((err)=>{
    console.log(err);
})

const userSchema=mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        required:true,
        unique:[true,'Email id already exits'],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error ('Email is invalid!')
           }
        }
    },
    password:{
        type:String,
        required:true,
        minlength:[8,'Your password be bhi 8 characters']
        
    }

})


// Create a new collection
const User=new mongoose.model('user',userSchema)


// t.increments('Post_id').primary();
// t.integer('User_id', 255)
// t.string('Title', 255);
// t.string('Description', 255);

const createdPost=mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})


const blogPost=new mongoose.model('post',createdPost)
// Likedislike Post

const Likedislike=mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'post'
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
    like:{
        type:Boolean
    },
    dislike:{
        type:Boolean
    }
})


const likedislike=new mongoose.model('likedislike',Likedislike)






module.exports={User,blogPost,likedislike}
