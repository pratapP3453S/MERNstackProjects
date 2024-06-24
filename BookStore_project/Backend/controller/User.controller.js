import User from "../model/User.model.js";
import bcryptjs from 'bcryptjs';

export const singup = async(req, res) => {
    try {
        const {fullname, email, password} = req.body;
        const user = await User.findOne({email});
    
        if (user){
            return res.status(400).json({message : "user already exists"});
        }
        const hashPassword = await bcryptjs.hash(password, 10);
        const createUser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword,
        })
        await createUser.save();
        res.status(201).json({message : "user created succesfully",
            user:{
                _id: createUser._id,
                fullname: createUser.fullname,
                email: createUser.email,
                password: createUser.password,
            }
        });
    } catch (error) {
        console.log("error : ", error);
        res.status(500).json({message : "internal server error"});
    }
}
export const login = async(req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        const isMatch = await bcryptjs.compare(password , user.password);
        if(!user || !isMatch){
            res.status(400).json({message : "invalid user or password"});
        }
        else{
            res.status(200).json({
                message : "Login successfully...",
                user: {
                    _id: user._id,
                    email: user.email,
                    fullname: user.fullname,
                },
            })
        }
    } catch (error) {
        console.log("error : ",error);
        res.status(500).json({message : "internal server error"})
    }
}