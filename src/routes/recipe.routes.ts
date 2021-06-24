import { Router } from 'express';
import recipe from '../controllers/recipe.controller';

const router = Router();

router.get('/recipes/:id',recipe.oneRecipe)
router.get('/recipes',recipe.listRecipes)
router.post('/recipes',recipe.createRecipe)
router.put('/recipes/:id',recipe.updateRecipe)

router.get('/recipes/type/:typeId',recipe.listRecipeByType)
router.get('/recipes/users/:userId',recipe.listRecipeByUser)
router.get('/recipes/favorite/:favorite',recipe.listRecipeByFavorite)
router.get('/recipes/category/:categoryId',recipe.listRecipeByCategory)

export default router;