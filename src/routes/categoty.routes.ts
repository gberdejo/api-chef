import { Router } from 'express'
import categoryController from '../controllers/category.controller'

const router = Router()
/**
 * @swagger
 * components:
 *  schemas:
 *    Category:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: Id autogenerado con nanoId
 *        category:
 *          type: string
 *          description: La categoria es Unique
 *      required:
 *       - name
 *       - category
 *      example:
 *       id: BTNes-NVl0DmeA7H2cjB
 *       category: comida criolla
 */
/**
 * @swagger
 *  tags:
 *   name: Categories
 *   description: Rutas de la categoria
 */
router.get('/categories/:id', categoryController.getOneCategory)
/**
 * @swagger
 *  /api/categories:
 *   get:
 *     sumary: Regresa una lista de categorias
 *     tags: [Categories]
 *     responses:
 *      200:  
 *        description: Lista de Categorias
 *        content:
 *          application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#components/schemas/Category'
 */
router.get('/categories', categoryController.getListCategory)
router.post('/categories', categoryController.createCategory)
router.delete('/categories/:id', categoryController.deleteCategory)

export default router