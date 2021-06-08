import { DataTypes, Model } from 'sequelize'
import sequelize from '../db'

class Category extends Model {
    public id!: string;
    public direction!: string

}
Category.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
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

export default Category