import { Router } from "express";
import userRoutes from '../routes/v1/user-routes.js';

const router = Router();


router.use('/v1',userRoutes);


export default router;