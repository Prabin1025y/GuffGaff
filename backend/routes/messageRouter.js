import express from "express";
import { getMessages, sendMessage } from "../controllers/messageController.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const messageRouter = express.Router();

messageRouter.post("/send/:receiverId", isAuthenticated, sendMessage);
messageRouter.get("/:secondUserId", isAuthenticated, getMessages);

export default messageRouter;