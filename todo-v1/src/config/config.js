// Flag ENVIRONMENT is passed only when we run setuplocal script
if (process.env.ENVIRONMENT === 'islocal') {
    console.log("--------> Loading .env for local environment setup")
    // NOTE .env must exist inside devEnv directory
    require('dotenv').config({path: __dirname + '/../../devEnv/.env'});
}

module.exports = {
    // NOTE For local development
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: 'postgres'
    },
    // NOTE For staging environment
    test: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: 'postgres'
    },
    // NOTE Only for production
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: 'postgres'
    }
};
