// Step 3 build connection to the database 
const mysql = require('mysql2')

const pool = mysql.createPool ({
    connectionLimit : 10,
    host: 'localhost',
    user: 'route',
    password: 'root',
    datadb: 'movies25db'

})

module.exports = pool