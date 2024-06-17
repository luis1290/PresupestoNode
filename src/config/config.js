require("dotenv").config();
module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "port": process.env.DB_PORT,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": "postgres",
    dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }
  }
}

//npx sequelize-cli model:generate --name recruiter --attributes name:string,linkelin:text,email:string,compani_id:integer
