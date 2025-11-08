// Step 5 export router
const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3002

// Step 6 create root route http://localhost:3002/api
router.get('/api', (req, res)=> {
    //res.send('movie api') <=Test 2
    res.json({
        'Movies': `http://localhost:${PORT}/api/movie`
    })
})
// Step 7 error handling
router.use((req, res, next)=> {
    res.status(404)
    // Test 3 type something random to make sure error message works(WORKS!!!)
    .send('<h1> 404 Error: The princess is in another castle 🏰</h1>')
})

module.exports = router