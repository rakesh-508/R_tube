import mongoose from "mongoose";
import User from "../Models/User.js";
import bcrypt from "bcryptjs";
import { ControlPointDuplicateOutlined } from "@material-ui/icons";
import jwt from "jsonwebtoken"
//in the future when we want to add or delete the videos we need to have the access tokens where we can fill it,so we need
//the jwt token from jsontokens
import { createError } from "../error.js";
export const signup = async (req, res, next) => {
  try {
    //Here we can make our password more and more stronger by using the bcryptjs, the below code is given there
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const data = new User({ ...req.body, password: hash });
    await data.save();
    res.status(200).send("User has been created!");
  } catch (err) {
    //The error file that has been created in the index.js
    next(err);
  }
};

export const signin = async (req, res, next) => {
  try {
    const name = req.body.name;
    const user = await User.findOne({ name: name });
    console.log(user)
    if(!user)
    {
      return next(createError(404, "user not found in the database"));
    }
    const token =jwt.sign({id:user._id},process.env.JWT)
    const {password, ...others} = user._doc
    //inorder to send this code to user we can use the cookies
    res.cookie("access_token",token,{
      //the below code help to be more secure and it does not allow third party 
      httpOnly:true
    }).status(200).json(others)
  } catch (err) {
    //The error file that has been created in the index.js
    next(err);
  }
};
