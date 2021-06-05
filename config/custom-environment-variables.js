require('dotenv').config();
module.exports = {
    server:{
        port: 'PORT'
    },
    db: {
        host: 'DB_HOST',
        user: 'DB_USER',
        password: 'DB_PASS',
        port: 'DB_PORT',
        db: 'DB_NAME',
        ssl: 'DB_SSL'
    },
};
