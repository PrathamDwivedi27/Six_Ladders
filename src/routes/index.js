import { Router } from "express";
import userRoutes from '../routes/v1/user-routes.js';
import chatGroupRoutes from '../routes/v1/chatGroup-routes.js';
import chatGroupUsersRoutes from '../routes/v1/chatGroupUser-routes.js';
import chatRoutes from '../routes/v1/chat-route.js';

const router = Router();


router.use('/v1',userRoutes);
router.use('/v1',chatGroupRoutes);
router.use('/v1',chatGroupUsersRoutes);
router.use('/v1',chatRoutes);


export default router;