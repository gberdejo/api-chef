import { DataTypes, Model } from 'sequelize'
import sequelize from '../db'

class User extends Model {
    public id!: Number
    public name!: String
    public lastname!: String
    public age!: Number
    public email!: String
    public password!: String
    public image!: String
    public state!: String
    public created!: Date
    public updated!: Date
}
User.init({
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
    initialAutoIncrement: "1",
    indexes: [{
        unique: true,
        fields: ['email']
    }]
})

export default User