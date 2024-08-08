import { model, models, Schema, Types } from "mongoose";

const ChatSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    groupchat:{
        type:boolean,
        default:false
    },
    creator:{
        type:Types.ObjectId,
        ref:"User"
    },
    members:[{
        type:Types.ObjectId,
        ref:"User"
    }]
},{timestamps:true})


export const Chat = models.Chat || model("Chat",ChatSchema)