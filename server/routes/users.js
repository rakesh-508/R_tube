import express from "express"
import { update,deleteUser,getUser,subscribe,unsubscribe,like,dislike} from "../controllers/User.js"
import  {verifyToken} from "../verifyToken.js";
const router = express.Router();
//update a user
router.put("/:id",verifyToken,update)
//delete a user
router.delete("/:id",verifyToken,deleteUser)
//get a user
router.get("/find/:id",getUser)
//subscribe a user this is will be id of the channel which we want to subscribe
router.put("/sub/:id",verifyToken,subscribe)
//unsubscribe a user
router.put("/unsub/:id",verifyToken,unsubscribe)
//like a video
router.put("/like/:videoid",verifyToken,like)
//dislike a video
router.put("/dislike/:videoid",verifyToken,dislike)
export default router;