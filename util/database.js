const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'user',
    database: 'node-complete',
    password: 1682
})

module.exports = pool.promise();