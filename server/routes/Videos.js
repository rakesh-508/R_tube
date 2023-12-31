import express from "express"
import {addVideo,updateVideo,deleteVideo,getVideo, addView, trend, random, sub} from "../controllers/Video.js"
import { verifyToken } from "../verifyToken.js";
import { get } from "mongoose";
const router = express.Router();
router.post("/",verifyToken,addVideo)
router.put("/:id",verifyToken,updateVideo)
router.delete("/:id",verifyToken,deleteVideo)
router.get("/find/:id",getVideo)
router.get("/view/:id",addView)
router.get("/trend",trend)
router.get("/random",random)
router.get("/sub",verifyToken,sub)
export default router;