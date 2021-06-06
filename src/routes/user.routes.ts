import { Router } from 'express';
import userController from '../controllers/user.controller';

const router = Router();

router.get('/users', userController.home)
router.post('/users', userController.inserUser)

export default router;