const pgp = require('pg-promise'); 

const db = pgp()({
    host: 'localhost',
    user: 'postgres',
    //password: '',
    database: 'cities_db',
    port: 5432
});

module.exports = db;