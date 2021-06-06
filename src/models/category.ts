import { DataTypes, Model } from 'sequelize'
import sequelize from '../db'

class Category extends Model {
    public id!: Number;
    public direction!: String
    category: any;

}
Category.init({
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

export default Category