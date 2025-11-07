// Step 1 build out my server
const express = require('express')
const server = express()
const router = require('./routes/router')
const PORT = process.env.PORT || 3000


//Step 1a 1st Test => Check terminal
server.listen(PORT, ()=> console.log(`It was working a second ago`))