"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// import { config as dotenv } from 'dotenv'
// dotenv()
const { DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_SSL } = process.env;
const sequelize = new sequelize_1.Sequelize(DB_NAME || 'apichef', DB_USER || 'root', DB_PASS || 'mysql', {
    host: DB_HOST || 'localhost',
    dialect: 'mysql',
    port: Number(DB_PORT) || 3306,
    pool: {
        min: 0,
        max: 5,
        idle: 10000
    },
    dialectOptions: {
        ssl: DB_SSL || false
    },
    logging: false
});
console.log(`host-DB--->${DB_HOST || 'localhost'}`);
exports.default = sequelize;
