// Step 1 build out my server
const express = require('express')
const server = express()
const router = require('./routes/router') // Step 4 (after commit) connect to router
const PORT = process.env.PORT || 3000

//Step 1b Install and handle security
const helmet = require('helmet')
const cors = require('cors')

// Step 2 Configure helmet
// server.use(helmet())
server.use(helmet.contentSecurityPolicy({
    useDefaults: true,
    crossOriginResourcePolicy: false,
     crossEmbedderPolicy: false,
    directives: {
        "img-src": ["'self'", "https: data"],
        "scriptSrc": ["'self'", "cdn.jsdelivr.net"]
    }
}))

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true}))
server.use('/', router) // Step 4b import router

// Step 1a 1st Test => Check terminal
server.listen(PORT, ()=> console.log(`It was working a second ago`))