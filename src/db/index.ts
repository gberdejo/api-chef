import {Sequelize} from 'sequelize';
import config from 'config';
const sequelize = new Sequelize(
    config.get('db.nameDB'),
    config.get('db.user'),
    config.get('db.password'),
    {
        host: config.get('db.host'),
        dialect: 'mysql',
        port: config.get('db.port'),
        pool: 
        {
            min:0,
            max:5,
            idle:10000
        },
        logging: false
    }    
)
