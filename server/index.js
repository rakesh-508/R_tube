import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
//these are the routes for the api that has been transformed
import userRoutes from "./routes/users.js"
import commentRoutes from "./routes/Comments.js";
import videoRoutes from "./routes/Videos.js";
import authRoutes from "./routes/auth.js";
const app = express();
app.use(express.json())
dotenv.config();
//the routes those has been imported those can be use by using this one
app.use("/api/users/", userRoutes);
app.use("/api/videos/", videoRoutes);
app.use("/api/comments/", commentRoutes);
app.use("/api/auth", authRoutes);

await mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("the database has been connected");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(8800, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("this port is runnig on the port 3000");
  }
});

