import Recipe from "../models/recipe";
import RecipeService from "./recipeService";

class RecipeServiceImpl implements RecipeService{
    private recipe;
    constructor(){
        this.recipe = Recipe;
    }
    public async listRecipes(): Promise<Recipe[]> {
        try {
            const list:Recipe[] = await  this.recipe.findAll({
                attributes:{
                    exclude:['created','updated','state']
                }
            })
            return list
        } catch (err) {
            throw err
        }
    }
    public async listRecipeByType(typeId: number): Promise<Recipe[]> {
        try {
            const list:Recipe[] = await  this.recipe.findAll({
                where:{
                    typeId
                },
                attributes:{
                 
                    exclude:['created','updated','state']
                }
            })
            return list
        } catch (err) {
            throw err
        }
    }
    public async listRecipeByCategory(categoryId: number): Promise<Recipe[]> {
         try {
            const list:Recipe[] = await  this.recipe.findAll({
                where:{
                    categoryId
                },
                attributes:{
                    exclude:['created','updated','state']
                }
            })
            return list
        } catch (err) {
            throw err
        }
    }
    public async listRecipeByFavorite(favorite: number): Promise<Recipe[]> {
         try {
            const list:Recipe[] = await  this.recipe.findAll({
                where:{
                    favorite
                },
                attributes:{
                 
                    exclude:['created','updated','state']
                }
            })
            return list
        } catch (err) {
            throw err
        }
    }
    public async updateRecipe(recipeId: number, user: Recipe): Promise<Recipe | null> {
        try {
            await this.recipe.update({
                name: user.name,
                description: user.description,
            },{
                where:{
                    id:recipeId
                }
            })
            const obj:Recipe | null = await this.oneRecipe(recipeId)
            return obj
        } catch (err) {
            throw err
        }
        
    }
    public async listRecipeByUser(userId: number): Promise<Recipe[]> {
        try {
            const list:Recipe[] = await  this.recipe.findAll({
                where:{
                    userId:userId
                },
                attributes:{
                    exclude:['created','updated','state']
                }
            })
            return list
        } catch (err) {
            throw err
        }
    }
  
    public async createRecipe(user: Recipe): Promise<Recipe> {
       try {
            const obj:Recipe = this.recipe.build({
                name: user.name,
                description: user.description,
                image: user.image,
                favorite: user.favorite,
                categoryId:user.categoryId,
                typeId:user.typeId,
                userId:user.userId
            })
            await obj.save()
            return obj
       } catch (err) {
           throw err
       }
    }
    public async oneRecipe(recipeId: number): Promise<Recipe | null> {
        try {
            const obj:Recipe |null = await this.recipe.findOne({
                where:{id:recipeId},
                attributes:{
                    exclude:['created','updated','state']
                }
            })
            return obj
        } catch (err) {
            throw err
        }
    }

}
export default  RecipeServiceImpl