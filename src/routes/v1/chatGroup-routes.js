import e, { Router } from "express";
import authMiddleware from "../../middleware/authMiddleware.js";
import {createChatGroup, deleteChatGroup, getChatGroup, getUserChatGroups, updateChatGroup} from "../../controller/chatGroupController.js";
const router = Router();

router.post("/chat-group",authMiddleware,createChatGroup);
router.get("/chat-group",authMiddleware,getUserChatGroups);
router.get("/chat-group/:id",getChatGroup);
router.put("/chat-group/:id",authMiddleware,updateChatGroup);
router.delete("/chat-group/:id",authMiddleware,deleteChatGroup);



export default router;