import express from "express";
import {
  getAllUsers,
  getMessage,
  sendMessage,
} from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import upload from "./../middleware/multer.js";

const router = express.Router();

router.get("/users", protectRoute, getAllUsers);
router.get("/:id", protectRoute, getMessage);
router.post("/send/:id", protectRoute, upload.single("image"), sendMessage);

export default router;
