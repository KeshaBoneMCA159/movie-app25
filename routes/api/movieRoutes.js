// Step 12 export router
const router = require('express').Router()

// Step 13 create movie route http://localhost:3000/api/movie
//(4th sanity check(daoCommon Error:It worked a second ago😩))
//(5th sanity check(a few moments later....(It WORKS!!!🤩))
const { movieDao: dao } = require('../../daos/dao')

router.get('/', (req, res) => {
    dao.findAll(req, res, dao.table)
})

// Step 15 create movie sort route http://localhost:3000/api/movie/sort/:sorter => (7th sanity check(It kinda WORKS but it only brings up 1 entry🤔))
router.get('/sort/:sorter', (req, res) => {
    dao.sort(res, dao.table, req.params.sorter)
})

// Step 14 create movie by id route http://localhost:3000/api/movie/:id => (6th sanity check(WORKS!!!))
router.get('/:id', (req, res) => {
    dao.findById(res, dao.table, req.params.id)
})

module.exports = router
