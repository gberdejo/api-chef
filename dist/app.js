"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
class App {
    constructor() {
        this.app = express_1.default();
        this.settings();
        this.middlewares();
        this.routes();
    }
    settings() {
        this.app.use(cors_1.default());
        this.app.use(morgan_1.default('dev'));
    }
    middlewares() {
    }
    routes() {
        this.app.use(user_routes_1.default);
        this.app.use((req, res) => {
            res.json({ msg: 'gaa' });
        });
    }
    listen() {
        this.app.listen(4000, () => {
            console.log('server run');
        });
    }
}
exports.default = new App;
