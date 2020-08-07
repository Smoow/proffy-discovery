const Database = require('./db')
const createProffy = require('./createProffy')

Database.then((db) => {
    // Insert data

    proffyValue = {
        name: "Pedro Henrique Carreto", avatar: "https://avatars2.githubusercontent.com/u/37567719?s=460&u=1ee201e40649e05078a90f9366ecdfb04f89fc48&v=4", 
        whatsapp: "17997668899", 
        bio: "Entusiasta das melhores tecnologias de matemática avançada.<br><br>Apaixonado por demonstrar teoremas e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas demonstrações.", 
    }

    classValue = {
        subject: "Matemática", 
        cost: "40", 
    }

    classScheduleValue = [
        {
            weekday: 0, 
            time_from:720, 
            time_to: 1220
        },
        {
            weekday: 1, 
            time_from:520, 
            time_to: 1220
        }
    ]
    

    // Consult datas
})