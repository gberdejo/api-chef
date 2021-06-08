import { DataTypes, Model } from 'sequelize'
import sequelize from '../db'

class Recipe extends Model {
    public id!: string
    public name!: string
    public description!: string
    public image!: string
    public favorite!: Number
    public state!: string
    public created!: Date
    public updated!: Date
}
Recipe.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
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
    }

}, {

    sequelize,
    timestamps: false,
})

export default Recipe