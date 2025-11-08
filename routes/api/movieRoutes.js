// Step 12 export route
const router = require('express').Router()

const { movieDao: dao} = require('../../daos/dao')

// Step 13 create method to findAll
router.get('/', (req, res)=> {
    dao.findAll(req, res, dao.table)
})

module.exports = router // last part of step 12
