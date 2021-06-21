import { Sequelize } from 'sequelize';
import {db} from '../config'
const sequelize = new Sequelize(
    db.DB_NAME,
    db.DB_USER,
    db.DB_PASS,
    {
        host: db.DB_HOST,
        dialect: 'mysql',
        port: Number(db.DB_PORT) ,
        pool:
        {
            min: 0,
            max: 5,
            idle: 10000
        },
        dialectOptions: {
            ssl: db.DB_SSL
        },
        logging: false
    }
)
console.log(`host-DB--->${db.DB_HOST || 'localhost'}`)
export default sequelize