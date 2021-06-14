import { DataTypes, Model } from 'sequelize'
import sequelize from '../db'

class Recipe extends Model {
    public id!: number
    public name!: string
    public description!: string
    public image!: string
    public favorite!: Number
    public state!: string
    public created!: Date
    public updated!: Date
    public categoryId!: number
    public userId!: number
    public typeId!: number
}
Recipe.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    },
    favorite: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
            len: [0, 1]
        }
    },
    created: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updated: {
        type: DataTypes.DATE,
        allowNull: true
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 1
    },
    categoryId:{
        type: DataTypes.INTEGER
    },
    typeId:{
        type: DataTypes.INTEGER
    },
    userId:{
        type: DataTypes.INTEGER
    }
}, {

    sequelize,
    timestamps: false,
    initialAutoIncrement: "1"
})

export default Recipe