import { createError } from "../error.js";
import User from "../Models/User.js";

export const update = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    //the left id come form the browser and right come from the verifytoken.js
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "only you can update your details"));
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    //the left id come form the browser and right come from the verifytoken.js
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("user has been deleted");
    } catch (err) {
      next(err);
    }
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user =  await User.findById(req.params.id)
    console.log(user);
    return res.status(404).send(user)
  } catch (err) {
    next(err);
    console.log(err)
  }
};

export const subscribe = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {//the id is from the verifytoken id that is our channel id
        $push:{ subscribedUsers:req.params.id }//this is the channel id of the other users ie channel id of the users
    })
    await User.findByIdAndUpdate(req.params.id,{
            $inc : {subscribers:1}
        });
        res.status(200).json("subscription successful")
  } catch (err) {
    next(err);
  }
};

export const unsubscribe = async (req, res, next) => {
    try {
        await User.findById(req.user.id,{//the id is from the verifytoken id that is our channel id
            $pull:{subscribedUsers:req.params.id}//this is the channel id of the other users ie channel id of the users
        })
        await User.findByIdAndUpdate(req.params.id,
            {
                $inc : {subscribers:-1}
            });
            res.status(200).json("subscription successful")
      } catch (err) {
        next(err);
      }
};

export const like = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

export const dislike = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
