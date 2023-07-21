import mongoose from "mongoose"
const Userschema = new mongoose.Schema({
    user:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    subscribers:{
        type:Number,
        default:0
    },
    img:{
        type:String
    },
    subscribedUsers:
    {
        type:[String]
    }
    
},{})
export default mongoose.model("User",Userschema)