"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const recipe_1 = __importDefault(require("../models/recipe"));
class RecipeServiceImpl {
    constructor() {
        this.recipe = recipe_1.default;
    }
    listRecipes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const list = yield this.recipe.findAll({
                    attributes: {
                        exclude: ['created', 'updated', 'state']
                    }
                });
                return list;
            }
            catch (err) {
                throw err;
            }
        });
    }
    listRecipeByType(typeId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const list = yield this.recipe.findAll({
                    where: {
                        typeId
                    },
                    attributes: {
                        exclude: ['created', 'updated', 'state']
                    }
                });
                return list;
            }
            catch (err) {
                throw err;
            }
        });
    }
    listRecipeByCategory(categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const list = yield this.recipe.findAll({
                    where: {
                        categoryId
                    },
                    attributes: {
                        exclude: ['created', 'updated', 'state']
                    }
                });
                return list;
            }
            catch (err) {
                throw err;
            }
        });
    }
    listRecipeByFavorite(favorite) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const list = yield this.recipe.findAll({
                    where: {
                        favorite
                    },
                    attributes: {
                        exclude: ['created', 'updated', 'state']
                    }
                });
                return list;
            }
            catch (err) {
                throw err;
            }
        });
    }
    updateRecipe(recipeId, user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.recipe.update({
                    name: user.name,
                    description: user.description,
                }, {
                    where: {
                        id: recipeId
                    }
                });
                const obj = yield this.oneRecipe(recipeId);
                return obj;
            }
            catch (err) {
                throw err;
            }
        });
    }
    listRecipeByUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const list = yield this.recipe.findAll({
                    where: {
                        userId: userId
                    },
                    attributes: {
                        exclude: ['created', 'updated', 'state']
                    }
                });
                return list;
            }
            catch (err) {
                throw err;
            }
        });
    }
    createRecipe(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const obj = this.recipe.build({
                    name: user.name,
                    description: user.description,
                    image: user.image,
                    favorite: user.favorite,
                    categoryId: user.categoryId,
                    typeId: user.typeId,
                    userId: user.userId
                });
                yield obj.save();
                return obj;
            }
            catch (err) {
                throw err;
            }
        });
    }
    oneRecipe(recipeId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const obj = yield this.recipe.findOne({
                    where: { id: recipeId },
                    attributes: {
                        exclude: ['created', 'updated', 'state']
                    }
                });
                return obj;
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.default = RecipeServiceImpl;
