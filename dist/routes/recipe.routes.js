"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const recipe_controller_1 = __importDefault(require("../controllers/recipe.controller"));
const router = express_1.Router();
router.get('/recipes/:id', recipe_controller_1.default.oneRecipe);
router.get('/recipes', recipe_controller_1.default.listRecipes);
router.get('/recipes/type/:typeId', recipe_controller_1.default.listRecipeByType);
router.get('/recipes/users/:userId', recipe_controller_1.default.listRecipeByUser);
router.get('/recipes/favorite/:favorite', recipe_controller_1.default.listRecipeByFavorite);
router.get('/recipes/category/:categoryId', recipe_controller_1.default.listRecipeByCategory);
router.post('/recipes', recipe_controller_1.default.createRecipe);
router.put('/recipes/:id', recipe_controller_1.default.updateRecipe);
exports.default = router;
