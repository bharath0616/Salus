import { errorHandler } from '../Utils/error.js';
import property from '../models/listing.model.js';
import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
export const test=(req,res)=>{
    res.json({
        message:'Hello World!'
    });  
}

export const updateUser= async (req,res,next)=>{
    if(req.user.id !== req.params.id) 
    return next(errorHandler(401,"You cannot update others account !"))
    try{
        if(req.body.password)
         { 
          req.body.password=bcryptjs.hashSync(req.body.password,12);  
         }
         const updateUser= await User.findByIdAndUpdate(req.params.id,{
            $set:{
                username: req.body.username,
                email:req.body.email,
                password:req.body.password, 
                avatar:req.body.avatar
            },
         },{new:true});
         const {password, ...rest}=updateUser._doc

         res.status(200).json(rest);
        }
catch(error){
    next(error)
}
};
export const deleteUser =async(req,res,next)=>{
    if(req.user.id !== req.params.id) 
    return next(errorHandler(402,"You can only delete your account !"))

    try{
        await User.findByIdAndDelete(req.params.id)
        res.clearCookie('access_token');
        res.status(200).json('User has been deleted !')
    }
    catch(error){
        next(error)
    }
}

  
  export const getUser = async (req, res, next) => {
    try {
      
      const user = await User.findById(req.params.id);
    
      if (!user) return next(errorHandler(404, 'User not found!'));
    
      const { password: pass, ...rest } = user._doc;
    
      res.status(200).json(rest);
    } catch (error) {
      next(error);
    }
  };
  