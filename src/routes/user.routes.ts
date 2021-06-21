import { Router } from 'express';
import user from '../controllers/user.controller';

const router = Router();

router.post('/users',user.createUser)
router.get('/users',user.listUser)
router.get('/users/:id',user.oneUser)
router.put('/users/:id',user.updateUser)

export default router;