// Step 8 connect to config database
const con = require('../../config/dbconfig')

const daoCommon = {

    // Step 9 create methods that'll query the database
    findAll: (req, res, table)=> {
        con.query (
            `SELECT * FROM ${table};`,
            (error, rows)=> {
                if(!error) {
                    if(rows.length == 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                   console.log(`Dao Error: ${error}`) 
                   res.json({
                    "message": 'error',
                    'table' : `${table}`,
                    'error': error
                   })
                }
            }
        )
    }
}

module.exports = daoCommon