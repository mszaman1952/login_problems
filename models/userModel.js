const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const {Schema, model} = mongoose;

const userSchema = new Schema({
    name : {
        type : String,
        trim : true,
        required : true,
    },
    email : {
        type : String,
        trim : true,
        requierd : true,
        unique : true,
    },
    mobile : {
        type : String,
        trim : true,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        trim : true,
        required : true,
        set : (v) => {
            return bcrypt.hashSync(v, bcrypt.genSaltSync(10))
        }
    }
}, {timestamps : true, versionKey : false});

const User = model("users", userSchema);
 
module.exports = User;