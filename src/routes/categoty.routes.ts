import {Router} from 'express'
import categoryController from '../controllers/category.controller'

const router = Router()

router.post('/categorys',categoryController.createCategory)
router.get('/categorys/:id',categoryController.getOneCategory)
router.get('/categorys',categoryController.getListCategory)

export default router