import mongoose from "mongoose"

 const UserScema = new mongoose.Schema({
    name : {
        type : String ,
        require : true
    },
    email : {
    type : String,
    require: true,
    unique : true

    },
    password : {
    type : String,
    require: true,
    },
    role : {
        type : String,
        enum : ["CANDIDATE", "INTERVIEWER", "ADMIN"],

    },
    status : {
        type : String ,
        enum : ["ACTIVE", "SUSPENDED"],
        default : "ACTIVE"
    }



 },{
    timestamps : true
 })


 export const  UserModel = mongoose.model('User' , UserScema)