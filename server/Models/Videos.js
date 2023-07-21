import mongoose from "mongoose"
const Videoschema = new mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    imgUrl:{
        type:string,
        required:true
    },
    videoUrl:{
        type:string,
        required:true
    },
    views:
    {
        type:Number,
        default:0
    },
    tags:{
        type:[stirng],
        default:[]
    },
    likes:{
        type:[string],
        default:[]
    },
    dislikes:{
        type:[string],
        default:[]
    }
},{timestamps:true})
export default mongoose.model("Video",Videoschema)