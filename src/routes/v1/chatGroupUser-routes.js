import { Router } from "express";
import { addGroupUser, getGroupUsers } from "../../controller/chatGroupUserController.js";

const router = Router();


router.get("/chat-group-users",getGroupUsers);
router.post("/chat-group-users",addGroupUser);


export default router;