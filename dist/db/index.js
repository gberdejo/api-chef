"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("config"));
const sequelize = new sequelize_1.Sequelize(config_1.default.get('db.nameDB'), config_1.default.get('db.user'), config_1.default.get('db.password'), {
    host: config_1.default.get('db.host'),
    dialect: 'mysql',
    port: config_1.default.get('db.port'),
    pool: {
        min: 0,
        max: 5,
        idle: 10000
    },
    logging: false
});
