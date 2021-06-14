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
const userServiceImpl_1 = __importDefault(require("../services/userServiceImpl"));
const sequelize_1 = __importDefault(require("sequelize"));
const http_errors_1 = __importDefault(require("http-errors"));
class UserController {
    constructor() {
        this.home = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const list = yield this.user.listUsers();
                res.status(200).json(list);
            }
            catch (err) {
                console.log(err instanceof sequelize_1.default.Error);
                if (err instanceof sequelize_1.default.Error) {
                    next(http_errors_1.default(400, 'invalid select'));
                }
                next(err);
            }
        });
        this.inserUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.user.createUser(req.body);
                res.status(200).json(user);
            }
            catch (err) {
                if (err instanceof sequelize_1.default.Error) {
                    return next(http_errors_1.default(429, err));
                }
                next(err);
            }
        });
        this.user = new userServiceImpl_1.default;
    }
}
exports.default = new UserController;
