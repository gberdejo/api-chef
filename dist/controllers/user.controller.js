"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
    constructor() {
        this.home = (req, res) => {
            res.send("<h1>Hola perrú</h1>");
        };
    }
}
exports.default = new UserController;
