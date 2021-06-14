import { DataTypes, Model } from 'sequelize'
import sequelize from '../db'

class Type extends Model {
    public id!: number
    public type!: String
}

Type.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: false,
    initialAutoIncrement: "1",
    indexes: [{
        unique: true,
        fields: ['type']
    }]
})

export default Type