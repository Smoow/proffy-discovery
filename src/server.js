const proffys = [
    { 
        name: "Pedro Henrique Carreto", avatar: "https://avatars2.githubusercontent.com/u/37567719?s=460&u=1ee201e40649e05078a90f9366ecdfb04f89fc48&v=4", 
        whatsapp: "17997668899", 
        bio: "Entusiasta das melhores tecnologias de matemática avançada.<br><br>Apaixonado por demonstrar teoremas e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas demonstrações.", 
        subject: "Matemática", 
        cost: "40", 
        weekday: [0], 
        time_from:[720], 
        time_to: [1220]
    },
    { 
        name: "Giulia Xavier Pinto", avatar: "https://scontent.fsjp8-1.fna.fbcdn.net/v/t1.0-9/52638741_2227674550819080_313963200259293184_o.jpg?_nc_cat=111&_nc_sid=174925&_nc_ohc=bhw0U5AOpM0AX8wgscL&_nc_ht=scontent.fsjp8-1.fna&oh=1e16a711990231c9fce078f2df5846e1&oe=5F4ED969", 
        whatsapp: "17997668899", 
        bio: "Entusiasta das maiores obras de literatura avançada.<br><br>Apaixonada pela beleza por trás da escrita e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explicações.", 
        subject: "Literatura", 
        cost: "45", 
        weekday: [1], 
        time_from:[720], 
        time_to: [1220]
    }
]

function pageLanding(request, response) {
    return response.render("index.html")
}

function pageStudy(request, response) {
    return response.render("study.html", { proffys } )
}

function pageGiveClasses(request, response) {
    return response.render("give-classes.html")
}

// Server
const express = require('express')
const server = express()

// Nunjucks configuration
const nunjucks = require('nunjucks')

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})


server
.use(express.static("public"))
// Routes
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

.listen(5000)
