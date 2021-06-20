"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_controller_1 = __importDefault(require("../controllers/category.controller"));
const router = express_1.Router();
router.get('/categories/:id', category_controller_1.default.getOneCategory);
router.get('/categories', category_controller_1.default.getListCategory);
router.post('/categories', category_controller_1.default.createCategory);
router.delete('/categories/:id', category_controller_1.default.deleteCategory);
exports.default = router;
