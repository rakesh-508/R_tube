import mongoose from "mongoose"
import User from "../Models/User.js"
import bcrypt from "bcryptjs"
import { ControlPointDuplicateOutlined } from "@material-ui/icons";
console.log(User)

 const signup = async (req, res, next) => {
    try {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      const data = new User({ ...req.body, password: hash });
      console.log(data);
      await data.save();
      res.status(200).send("User has been created!");
    } catch (err) {
      next(err);
    }
  };
  export default signup