import mongoose from "mongoose";
const Usermodel=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    textfield:{
        type:String,
        required:false
    },
   
},{timestamp:true})

const Users=mongoose.model('Users',Usermodel)
export default Users