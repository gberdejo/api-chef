import Recipe from '../models/recipe'
abstract class RecipeService{

    public abstract listRecipes(): Promise<Recipe[]>;
    public abstract listRecipeByType(typeId:number): Promise<Recipe[]>;
    public abstract listRecipeByCategory(categoryId:number): Promise<Recipe[]>;
    public abstract listRecipeByFavorite(favorite:number): Promise<Recipe[]>;
    public abstract listRecipeByUser(userId:number): Promise<Recipe[]>;
    public abstract createRecipe(user:Recipe):Promise<Recipe>;
    public abstract oneRecipe(recipeId:number): Promise<Recipe | null>
    public abstract updateRecipe(recipeId:number,user:Recipe):Promise<Recipe | null>


}
export default RecipeService