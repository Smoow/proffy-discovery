// Server
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

// Nunjucks configuration -- Template Engine
const nunjucks = require('nunjucks')

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Server start and configs
server
// receive datas by request.body
.use(express.urlencoded({ extended: true }))
.use(express.static("public"))
// Routes
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)


// Start server
.listen(5000)
