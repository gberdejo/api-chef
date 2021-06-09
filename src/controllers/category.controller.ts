import { Handler, Response, Request, NextFunction } from 'express'
import CategoryServiceImpl from '../services/categoryServiceImpl'
import sequelize from 'sequelize'
import createError from 'http-errors'
import Category from '../models/category'
class CategoryController {
    private category: CategoryServiceImpl
    constructor() {
        this.category = new CategoryServiceImpl
    }
    createCategory: Handler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { category, ...data } = req.body
            const results = await this.category.createCategory(category)
            res.status(200).json(results)
        } catch (err) {
            if (err instanceof sequelize.Error) {
                next(createError(400, err))
            }
            next(err)
        }
    }
    getOneCategory: Handler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const results = await this.category.getOneCategory(req.params.id)
            res.status(200).json(results)
        } catch (err) {
            if (err instanceof sequelize.Error) {
                next(createError(400, err))
            }
            next(err)
        }
    }
    getListCategory: Handler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const list = await this.category.listCategory();
            res.status(200).json(list)
        } catch (err) {
            if (err instanceof sequelize.Error) {
                next(createError(400, err))
            }
            next(err)
        }
    }
    deleteCategory: Handler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const results: string = await this.category.deleteCategory(req.params.id)
            res.status(200).json({ msg: results })
        } catch (err) {
            if (err instanceof sequelize.Error) {
                next(createError(400, err))
            }
            next(err)
        }
    }
    updateCategory: Handler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const obj = await this.category.editCateogry(req.params.id, req.body)
            res.status(200).json(obj)
        } catch (err) {
            if (err instanceof sequelize.Error) {
                next(createError(400, err))
            }
            next(err)
        }
    }
}

export default new CategoryController