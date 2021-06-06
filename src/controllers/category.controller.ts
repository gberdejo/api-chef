import { Handler, Response, Request, NextFunction } from 'express'
import CategoryServiceImpl from '../services/categoryServiceImpl'
import sequelize from 'sequelize'
import createError from 'http-errors'
class CategoryController{
    private category : CategoryServiceImpl
    constructor(){
        this.category = new CategoryServiceImpl
    }
     createCategory :Handler = async (req: Request, res:Response,next:NextFunction)  => {
        try {
            const results  = await this.category.createCategory(req.body)
            res.status(200).json(results)
        } catch (err) {
            if(err instanceof sequelize.Error){
                next(createError(400,err))
            }
            next(err)
        }
    }
    getOneCategory : Handler = async (req: Request, res:Response,next:NextFunction) => {
        try {
            const results = await this.category.getOneCategory(Number(req.params.id))
            res.status(200).json(results)
        } catch (err) {
            if(err instanceof sequelize.Error){
                next(createError(400,err))
            }
            next(err)
        }
    }
    getListCategory : Handler = async (req: Request, res:Response,next:NextFunction) => {
        try {
            const list = await this.category.listCategory();
            res.status(200).json(list)
        } catch (err) {
            if(err instanceof sequelize.Error){
                next(createError(400,err))
            }
            next(err)
        }
    }
}

export default new CategoryController