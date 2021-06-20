"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../db"));
class Recipe extends sequelize_1.Model {
}
Recipe.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false
    },
    image: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    favorite: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
            len: [0, 1]
        }
    },
    created: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW
    },
    updated: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    },
    state: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: 1
    },
    categoryId: {
        type: sequelize_1.DataTypes.INTEGER
    },
    typeId: {
        type: sequelize_1.DataTypes.INTEGER
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    sequelize: db_1.default,
    timestamps: false,
    initialAutoIncrement: "1"
});
exports.default = Recipe;
