import RecipeServiceImpl from "../services/resipeServiceImpl";
import sequelize from 'sequelize'
import createError from 'http-errors'
import { Handler, Response, Request, NextFunction } from 'express'
import Recipe from "../models/recipe";
class RecipeController{
    private recipe;

    constructor(){
        this.recipe = new RecipeServiceImpl();
    }
    listRecipes : Handler = async (req: Request, res: Response, next: NextFunction)=>{
        try {
            const list:Recipe[] = await this.recipe.listRecipes()
            res.status(200).json(list) 
        } catch (err) {
             if (err instanceof sequelize.Error) {
                next(createError(400, err))
            }
            next(createError(404, err))
        }
    }
listRecipeByType : Handler = async (req: Request, res: Response, next: NextFunction)=>{
    try {
        const list : Recipe[] = await this.recipe.listRecipeByType(Number(req.params.typeId))
         res.status(200).json(list) 
    } catch (err) {
         if (err instanceof sequelize.Error) {
                next(createError(400, err))
            }
            next(createError(404, err))
    }
}
listRecipeByCategory : Handler = async (req: Request, res: Response, next: NextFunction) =>{
    try {
        const list : Recipe[] = await this.recipe.listRecipeByCategory(Number(req.params.categoryId))
        res.status(200).json(list) 
    } catch (err) {
         if (err instanceof sequelize.Error) {
            next(createError(400, err))
        }
        next(createError(404, err))
    }
}
listRecipeByFavorite: Handler = async (req: Request, res: Response, next: NextFunction)=>{
    try {
        const list: Recipe[] = await this.recipe.listRecipeByFavorite(Number(req.params.favorite))
        res.status(200).json(list) 
    } catch (err) {
         if (err instanceof sequelize.Error) {
            next(createError(400, err))
        }
        next(createError(404, err))
    }
}

listRecipeByUser : Handler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const list: Recipe[] = await this.recipe.listRecipeByUser(Number(req.params.userId))
        res.status(200).json(list) 
    } catch (err) {
         if (err instanceof sequelize.Error) {
            next(createError(400, err))
        }
        next(createError(404, err))
    }
}
createRecipe : Handler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const obj :Recipe = await this.recipe.createRecipe(req.body)
        res.status(200).json(obj)
    } catch (err) {
           if (err instanceof sequelize.Error) {
            next(createError(400, err))
        }
        next(createError(404, err))
    }
}
oneRecipe : Handler = async  (req: Request, res: Response, next: NextFunction) => {
    try {
        const obj: Recipe | null = await this.recipe.oneRecipe(Number(req.params.id))
        if(!obj) return res.status(404).json({msg:'No existe la receta'})
        res.status(200).json(obj)
    } catch (err) {
           if (err instanceof sequelize.Error) {
            next(createError(400, err))
        }
        next(createError(404, err))
    }
}

updateRecipe : Handler = async  (req: Request, res: Response, next: NextFunction) =>{
    try {
        const obj: Recipe |null = await this.recipe.updateRecipe(Number(req.params.id),req.body)
         if(!obj) return res.status(404).json({msg:'No existe la receta'})
        res.status(200).json(obj)
    } catch (err) {
        if (err instanceof sequelize.Error) {
            next(createError(400, err))
        }
        next(createError(404, err))
    }
}
}
export default new RecipeController()
