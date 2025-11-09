// Step 8 connect to config database
const con = require('../../config/dbconfig')

const daoCommon = {

    // Step 9 create methods that'll query the database
    findAll: (req, res, table)=> {
        //.query(sql query, callback func)
        //.execute is better to use
        con.execute(
            `SELECT * FROM ${table};`,
            (error, rows)=> {
                if(!error) {
                    if(rows.length === 1) {
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
    },

    findById: (res, table, id)=> {
        con.execute(
            `SELECT * FROM ${table} WHERE ${table}_id = ${id};`,
            (error, rows)=> {
                if(!error) {
                    res.json(...rows)
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
    },

    sort: (res, table, sorter)=> {

        con.execute(
            `SELECT * FROM ${table} ORDER BY ${sorter};`,
            (error, rows)=> {
                if(!error) {
                    res.json(...rows)
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

module.exports = daoCommon //<= part of Step 8