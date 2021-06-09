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
 *    NotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          desciption: Un mensaje sobre el error 404
 *      example:
 *        msg: No se encontro la categoria
 *         
 *  parameters:
 *    categoryId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *      description: Id de la cateogria
 *
 */
/**
 * @swagger
 *  /api/categories/{id}:
 *   get:
 *      sumary: Regresa una lista en especifico
 *      tags: [Categories]
 *      parameters:
 *        - $ref: '#/components/parameters/categoryId'
 *      responses:
 *        200:
 *          description: Un objeto de la categoria
 *          content: 
 *            application/json:
 *              schema:
 *                $ref: '#components/schemas/Category'
 *        404:
 *          description: Nos se encontro la categoria
 *  
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
/**
 * @swagger
 *  /api/categories:
 *   post:
 *      sumary: Crear una nueva categoria
 *      tags: [Categories]
 *      requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#components/schemas/Category'
 * 
 *      responses:
 *        200:
 *          description: Se creo la categoria
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#components/schemas/Category'
 *        400:
 *          description: Se necesitan datos para la request
 *        404:
 *          desciption: No se encontro lo solicitado
 */
router.post('/categories', categoryController.createCategory)
/**
 * @swagger
 *  /api/categories/{id}:
 *   delete:
 *      sumary: Eliminar una Categoria
 *      tags: [Categories]
 *      parameters:
 *        - $ref: '#components/parameters/categoryId'
 *      responses:
 *          200:
 *            description: Se elimino una categoria
 *            
 */
router.delete('/categories/:id', categoryController.deleteCategory)

export default router