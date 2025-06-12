import { Router } from "express";
import userRoutes from '../routes/v1/user-routes.js';
import chatGroupRoutes from '../routes/v1/chatGroup-routes.js';

const router = Router();


router.use('/v1',userRoutes);
router.use('/v1',chatGroupRoutes);


export default router;