
// import dotenv from 'dotenv';
//  dotenv.config();
const server = {
    PORT : process.env.PORT || 4000
}
const db = {
    DB_NAME: process.env.DB_NAME || 'apichef', 
    DB_USER: process.env.DB_USER || 'root',
    DB_PASS: process.env.DB_PASS || 'mysql',
    DB_HOST: process.env.DB_HOST || 'localhost', 
    DB_PORT: process.env.DB_PORT || 3306,
    DB_SSL :process.env.DB_SSL || false
}
export {
   server,db
}