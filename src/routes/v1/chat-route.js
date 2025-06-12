import { Router } from "express";
import { getGroupChats } from "../../controller/chat-controller.js";

const router = Router();


router.get("/chats/:groupId", getGroupChats);

export default router;
