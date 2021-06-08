import { DataTypes, Model } from 'sequelize'
import sequelize from '../db'

class User extends Model {
    public id!: string
    public name!: string
    public lastname!: string
    public age!: Number
    public email!: string
    public password!: string
    public image!: string
    public state!: string
    public created!: Date
    public updated!: Date
}
User.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
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
    indexes: [{
        unique: true,
        fields: ['email']
    }]
})

export default User