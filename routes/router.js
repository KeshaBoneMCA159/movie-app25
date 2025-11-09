// Step 5 export router
const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3000

// Step 6 create root route http://localhost:3000/api
router.get('/api', (req, res)=> {
    //res.send('movie api') //<=(2nd sanity check(WORKS!!!))
   res.json({
        'Movies': `http://localhost:${PORT}/api/movie`
    })
})

router.use('/api/movie', require('./api/movieRoutes'))

// Step 7 error handling <=(3rd sanity check(WORKS!!!))
router.use((req, res, next)=> {
    res.status(404)
    .send('<h1>404 Error: The princess is in another castle🏰</h1>')
})

module.exports = router