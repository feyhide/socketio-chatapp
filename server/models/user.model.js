import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        select:false,
        type:String,
        required:true
    },
    avatar:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    }
},{timestamps:true})


export const User = models.User || model("User",UserSchema)