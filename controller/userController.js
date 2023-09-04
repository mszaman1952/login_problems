const User = require("../models/userModel");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try {
        const {name, email, mobile, password} = req.body;

        const existUser = await User.findOne({email, mobile})
        if(existUser){  
            res.status(200).json({
                message : "User Already Register? Please Login."
            })  
        }
        const newUser = await new User({name, email, mobile, password}).save()

        res.status(200).json({
            status : "success",
            data : newUser
        })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error
        })
    }
}

const login = async (req, res) => {   
    try {
        const {email, mobile, password} = req.body;

        let user = await User.findOne({$or : [{email},{mobile}]});
 
        if(!user){
            res.status(203).json({
                message : "Please Registration First..."
            })  
        }       

        const hashpassword = await bcrypt.compare(password, user.password)
 
        if(!hashpassword){
            res.status(404).json({
                message : "Login Failed"
            })
        }

        // create jwt token 
        const token = jwt.sign({_id : user._id}, 'ABC123', {expiresIn : 7 * 24 * 60 * 60 * 1000})
        res.status(200).json({
            messae : "Login Successfully",
            data : token
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            message : "Login Failed...",
        })
    }
}

module.exports = {
    register,
    login
}