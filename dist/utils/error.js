"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CoffeeNotFound extends Error {
    constructor(message, status) {
        super(message);
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
        this.status = status;
    }
    statusCode() {
        return this.status;
    }
}
exports.default = CoffeeNotFound;
