import { Router } from 'express'
import categoryController from '../controllers/category.controller'

const router = Router()

router.get('/categories/:id', categoryController.getOneCategory)

router.get('/categories', categoryController.getListCategory)

router.post('/categories', categoryController.createCategory)

router.delete('/categories/:id', categoryController.deleteCategory)

export default router