"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../db"));
class Type extends sequelize_1.Model {
}
Type.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    type: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: db_1.default,
    timestamps: false,
    initialAutoIncrement: "1",
    indexes: [{
            unique: true,
            fields: ['type']
        }]
});
exports.default = Type;
