import { model, models, Schema, Types } from "mongoose";

const RequestSchema = new Schema({
    status:{
        type:String,
        default:"pending",
        enum:["pending","accepted","rejected"]
    },
    sender:{
        type:Types.ObjectId,
        ref:"User",
        required:true
    },
    recieved:{
        type:Types.ObjectId,
        ref:"User",
        required:true
    }
},{timestamps:true})


export const Request = models.Request || model("Request",RequestSchema)