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
const user_1 = __importDefault(require("../models/user"));
class UserServiceImpl {
    constructor() {
        this.user = user_1.default;
    }
    oneUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.user.findByPk(id);
                return user;
            }
            catch (err) {
                throw err;
            }
        });
    }
    updateUser(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.user.update({
                    name: user.name,
                    lastname: user.lastname,
                    age: user.age
                }, {
                    where: { id }
                });
                const obj = yield this.oneUser(id);
                return obj;
            }
            catch (err) {
                throw err;
            }
        });
    }
    createUser(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = this.user.build({
                    name: body.name,
                    lastname: body.lastname,
                    age: body.age,
                    email: body.email,
                    password: body.password
                });
                yield user.save();
                return user;
            }
            catch (err) {
                console.log(err);
                throw err;
            }
        });
    }
    listUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const list = yield this.user.findAll();
                return list;
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.default = UserServiceImpl;
