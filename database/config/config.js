require("dotenv").config();

const {
  DB_HOST,
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
  DB_PORT
} = process.env

module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOST,
    "port": DB_PORT,
    "dialect": "postgres",
    "ssl": true,
    "dialectOptions": {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false
      }
    }
  },
  "test": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOST,
    "port": DB_PORT,
    "dialect": "postgres",
    "ssl": true,
    "dialectOptions": {
      "ssl": true,
      "rejectUnauthorized": false
    }
  },
  "production": {
    "username": "oajntzkuxbfkwi",
    "password": "89c6b566c31b15cbabd28e438078127a74906727f127b1229b1a19bd34d4db07",
    "database": "d6gjm40pitabhc",
    "host": "ec2-3-233-7-12.compute-1.amazonaws.com",
    "port": "5432",
    "dialect": "postgres",
    "ssl": true,
    "dialectOptions": {
      "ssl": true,
      "rejectUnauthorized": false
    }
  }
}
