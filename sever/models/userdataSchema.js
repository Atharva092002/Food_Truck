const mongoose=require('mongoose');
const bcryptjs=require('bcryptjs');
const jwt=require('jsonwebtoken');

const userDataSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    companyname:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
})

const UserData = new mongoose.model("USERDATA",userDataSchema);

module.exports=UserData;