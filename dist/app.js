"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const categoty_routes_1 = __importDefault(require("./routes/categoty.routes"));
const recipe_routes_1 = __importDefault(require("./routes/recipe.routes"));
const config_1 = require("./config");
class App {
    constructor() {
        this.app = express_1.default();
        this.settings();
        this.middlewares();
        this.routes();
    }
    settings() {
        this.app.set('port', config_1.server.PORT);
    }
    middlewares() {
        this.app.use(cors_1.default());
        this.app.use(morgan_1.default('dev'));
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use('/api', user_routes_1.default);
        this.app.use('/api', categoty_routes_1.default);
        this.app.use('/api', recipe_routes_1.default);
        this.app.use((req, res, next) => {
            const err = new Error(`Not Fount - ${req.originalUrl}`);
            res.status(404);
            next(err);
        });
        this.app.use((err, req, res, next) => {
            res.status(err.status || 500);
            res.json({
                status: err.status,
                message: err.message,
                stack: err.stack
            });
        });
    }
    listen() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`server on port: ${this.app.get('port')}`);
        });
    }
}
exports.default = new App;
