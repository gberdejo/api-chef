require('dotenv').config();
module.exports = {
  server:{
    port : 3000
  },
  db: {
    host: "localhost",
    user: "root",
    password: "mysql", 
    port: 3306,
    db: "apichef",
    ssl: false
  },
  mode: '---> development'
};
