"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const router = express_1.Router();
router.post('/users', user_controller_1.default.createUser);
router.get('/users', user_controller_1.default.listUser);
router.get('/users/:id', user_controller_1.default.oneUser);
router.put('/users/:id', user_controller_1.default.updateUser);
exports.default = router;
