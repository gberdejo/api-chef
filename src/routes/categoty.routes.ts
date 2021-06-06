import {Router} from 'express'
import categoryController from '../controllers/category.controller'

const router = Router()

router.get('/categorys/:id',categoryController.getOneCategory)
router.get('/categorys',categoryController.getListCategory)
router.post('/categorys',categoryController.createCategory)
router.delete('/categorys/:id',categoryController.deleteCategory)

export default router