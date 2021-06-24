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
const resipeServiceImpl_1 = __importDefault(require("../services/resipeServiceImpl"));
const sequelize_1 = __importDefault(require("sequelize"));
const http_errors_1 = __importDefault(require("http-errors"));
class RecipeController {
    constructor() {
        this.listRecipes = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const list = yield this.recipe.listRecipes();
                res.status(200).json(list);
            }
            catch (err) {
                if (err instanceof sequelize_1.default.Error) {
                    next(http_errors_1.default(400, err));
                }
                next(http_errors_1.default(404, err));
            }
        });
        this.listRecipeByType = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const list = yield this.recipe.listRecipeByType(Number(req.params.typeId));
                res.status(200).json(list);
            }
            catch (err) {
                if (err instanceof sequelize_1.default.Error) {
                    next(http_errors_1.default(400, err));
                }
                next(http_errors_1.default(404, err));
            }
        });
        this.listRecipeByCategory = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const list = yield this.recipe.listRecipeByCategory(Number(req.params.categoryId));
                res.status(200).json(list);
            }
            catch (err) {
                if (err instanceof sequelize_1.default.Error) {
                    next(http_errors_1.default(400, err));
                }
                next(http_errors_1.default(404, err));
            }
        });
        this.listRecipeByFavorite = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const list = yield this.recipe.listRecipeByFavorite(Number(req.params.favorite));
                res.status(200).json(list);
            }
            catch (err) {
                if (err instanceof sequelize_1.default.Error) {
                    next(http_errors_1.default(400, err));
                }
                next(http_errors_1.default(404, err));
            }
        });
        this.listRecipeByUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const list = yield this.recipe.listRecipeByUser(Number(req.params.userId));
                res.status(200).json(list);
            }
            catch (err) {
                if (err instanceof sequelize_1.default.Error) {
                    next(http_errors_1.default(400, err));
                }
                next(http_errors_1.default(404, err));
            }
        });
        this.createRecipe = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const obj = yield this.recipe.createRecipe(req.body);
                res.status(200).json(obj);
            }
            catch (err) {
                if (err instanceof sequelize_1.default.Error) {
                    next(http_errors_1.default(400, err));
                }
                next(http_errors_1.default(404, err));
            }
        });
        this.oneRecipe = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const obj = yield this.recipe.oneRecipe(Number(req.params.id));
                if (!obj)
                    return res.status(404).json({ msg: 'No existe la receta' });
                res.status(200).json(obj);
            }
            catch (err) {
                if (err instanceof sequelize_1.default.Error) {
                    next(http_errors_1.default(400, err));
                }
                next(http_errors_1.default(404, err));
            }
        });
        this.updateRecipe = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const obj = yield this.recipe.updateRecipe(Number(req.params.id), req.body);
                if (!obj)
                    return res.status(404).json({ msg: 'No existe la receta' });
                res.status(200).json(obj);
            }
            catch (err) {
                if (err instanceof sequelize_1.default.Error) {
                    next(http_errors_1.default(400, err));
                }
                next(http_errors_1.default(404, err));
            }
        });
        this.recipe = new resipeServiceImpl_1.default();
    }
}
exports.default = new RecipeController();
