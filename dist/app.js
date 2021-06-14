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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const categoty_routes_1 = __importDefault(require("./routes/categoty.routes"));
const db_1 = __importDefault(require("./db"));
const category_1 = __importDefault(require("./models/category"));
const user_1 = __importDefault(require("./models/user"));
const type_1 = __importDefault(require("./models/type"));
const recipe_1 = __importDefault(require("./models/recipe"));
//import dotenv from 'dotenv'
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const awaggerOptions_1 = require("./awaggerOptions");
class App {
    constructor() {
        this.app = express_1.default();
        this.settings();
        this.middlewares();
        this.routes();
        //dotenv.config()
    }
    settings() {
        this.app.set('port', process.env.PORT || 4000);
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
        this.specs = swagger_jsdoc_1.default(awaggerOptions_1.options);
        this.app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(this.specs));
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
    models() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                type_1.default.hasMany(recipe_1.default);
                recipe_1.default.belongsTo(type_1.default);
                category_1.default.hasMany(recipe_1.default);
                recipe_1.default.belongsTo(category_1.default);
                user_1.default.hasMany(recipe_1.default);
                recipe_1.default.belongsTo(user_1.default);
                db_1.default.sync();
                resolve("-->> Tables sync!");
            }
            catch (err) {
                console.log(err);
                reject(err);
            }
        }));
    }
    start() {
        db_1.default.authenticate()
            .then(() => {
            console.log('DataBase Connection!');
            //return this.models()
            this.listen();
        })
            /*.then((info) => {
                console.log(info)
                this.listen()
            })*/
            .catch((err) => console.log(err));
    }
    listen() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`server on port: ${this.app.get('port')}`);
        });
    }
}
exports.default = new App;
