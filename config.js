const dotenv = require('dotenv');


const config = {
  appName: process.env.APP_NAME || 'Node Assessment App',
  port:   process.env.PORT|| 3000,
  dbHost: process.env.DB_HOST || 'localhost',
  dbUser: process.env.DB_USER || 'simran',
  apiKey: process.env.API_KEY || 'test_key_12345',
};

module.exports = config;
