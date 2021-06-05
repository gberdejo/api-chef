import { DataTypes, Model } from 'sequelize'
import sequelize from '../db'

class Direction extends Model {
    public id!: Number;
    public direction!: String

}
Direction.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: false,
    initialAutoIncrement: '1',
    indexes: [{
        unique: true,
        fields: ['category']
    }]
})

export default Direction