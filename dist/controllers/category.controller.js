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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categoryServiceImpl_1 = __importDefault(require("../services/categoryServiceImpl"));
const sequelize_1 = __importDefault(require("sequelize"));
const http_errors_1 = __importDefault(require("http-errors"));
class CategoryController {
    constructor() {
        this.createCategory = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const _a = req.body, { category } = _a, data = __rest(_a, ["category"]);
                const results = yield this.category.createCategory(category);
                res.status(200).json(results);
            }
            catch (err) {
                if (err instanceof sequelize_1.default.Error) {
                    next(http_errors_1.default(400, err));
                }
                next(err);
            }
        });
        this.getOneCategory = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const results = yield this.category.getOneCategory(req.params.id);
                res.status(200).json(results);
            }
            catch (err) {
                if (err instanceof sequelize_1.default.Error) {
                    next(http_errors_1.default(400, err));
                }
                next(err);
            }
        });
        this.getListCategory = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const list = yield this.category.listCategory();
                res.status(200).json(list);
            }
            catch (err) {
                if (err instanceof sequelize_1.default.Error) {
                    next(http_errors_1.default(400, err));
                }
                next(err);
            }
        });
        this.deleteCategory = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const results = yield this.category.deleteCategory(req.params.id);
                res.status(200).json({ msg: results });
            }
            catch (err) {
                if (err instanceof sequelize_1.default.Error) {
                    next(http_errors_1.default(400, err));
                }
                next(err);
            }
        });
        this.updateCategory = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const obj = yield this.category.editCateogry(req.params.id, req.body);
                res.status(200).json(obj);
            }
            catch (err) {
                if (err instanceof sequelize_1.default.Error) {
                    next(http_errors_1.default(400, err));
                }
                next(err);
            }
        });
        this.category = new categoryServiceImpl_1.default;
    }
}
exports.default = new CategoryController;
