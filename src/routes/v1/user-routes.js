import { Router } from "express";
import {login} from '../../controller/user-controller.js';

const router= Router();

router.post('/auth/login', login);

export default router;