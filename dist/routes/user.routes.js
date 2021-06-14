"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const router = express_1.Router();
router.get('/users', user_controller_1.default.home);
router.post('/users', user_controller_1.default.inserUser);
exports.default = router;
