const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin@123',
    database: 'movie-night-organizer'
});

const promisePool = pool.promise();

module.exports = promisePool;

