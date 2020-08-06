const express = require('express')
const server = express()

server.use(express.static("public"))

.get("/", (request, response) => {
    return response.sendFile(__dirname + "/views/index.html")
})
.get("/study", (request, response) => {
    return response.send("Study Listening")
})
.listen(5000)
