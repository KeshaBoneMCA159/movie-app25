// Step 3 build connection to the database 
const mysql = require('mysql2')

const pool = mysql.createPool ({
    connectionLimit : 10,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'movies25db'

})

module.exports = pool