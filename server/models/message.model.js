import { model, models, Schema, Types } from "mongoose";

const MessageSchema = new Schema({
    content:{
        type:String
    },
    attachments:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    sender:{
        type:Types.ObjectId,
        ref:"User",
        required:true
    },
    chat:{
        type:Types.ObjectId,
        ref:"Chat",
        required:true
    }
},{timestamps:true})


export const Message = models.Message || model("Message",MessageSchema)