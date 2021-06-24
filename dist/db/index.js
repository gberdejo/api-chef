"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../config");
const sequelize = new sequelize_1.Sequelize(config_1.db.DB_NAME, config_1.db.DB_USER, config_1.db.DB_PASS, {
    host: config_1.db.DB_HOST,
    dialect: 'mysql',
    port: Number(config_1.db.DB_PORT),
    pool: {
        min: 0,
        max: 5,
        idle: 10000
    },
    dialectOptions: {
        ssl: config_1.db.DB_SSL
    },
    logging: false
});
console.log(`host-DB--->${config_1.db.DB_HOST || 'localhost'}`);
exports.default = sequelize;
