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
const category_1 = __importDefault(require("../models/category"));
const http_errors_1 = __importDefault(require("http-errors"));
const nanoid_1 = require("nanoid");
class CategoryServiceImpl {
    constructor() {
        this.category = category_1.default;
    }
    getOneCategory(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const obj = yield this.category.findOne({
                    where: { id }
                });
                if (!obj)
                    throw http_errors_1.default(404, `No se encontro el id ${id}`);
                return obj;
            }
            catch (err) {
                throw err;
            }
        });
    }
    listCategory() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const list = yield this.category.findAll({
                    order: [['category', 'ASC']]
                });
                return list;
            }
            catch (err) {
                throw err;
            }
        });
    }
    editCateogry(id, obj) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { category } = obj;
                yield this.category.update({
                    category
                }, {
                    where: {
                        id
                    }
                });
                const cat = yield this.getOneCategory(id);
                return cat;
            }
            catch (err) {
                throw err;
            }
        });
    }
    deleteCategory(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.category.destroy({
                    where: { id }
                });
                return `Se elimino, con el id ${id}`;
            }
            catch (err) {
                throw err;
            }
        });
    }
    createCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cate = this.category.build({ category });
                cate.id = nanoid_1.nanoid();
                yield cate.save();
                return cate;
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.default = CategoryServiceImpl;
