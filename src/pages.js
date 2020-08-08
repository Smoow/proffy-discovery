const Database = require('./database/db')

const { subjects, weekdays, getSubject } = require('./utils/format')

function pageLanding(request, response) {
    return response.render("index.html")
}

function pageStudy(request, response) {
    const filters = request.query

    if (!filters.subject || !filters.weekday || !filters.time) {
        return response.render("study.html", { filters, subjects, weekdays } )
    }

    const query = `
        SELECT classes.*, proffys.* 
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffy_id)
        WHERE EXISTS (
            SELECT class_schedule.* 
            FROM class_schedule
            WHERE class_schedule.class_id = classes.id
            AND class_schedule.weekday = ${filters.weekday}
            AND class_schedule.time_from <= ${filters.time}
            AND class_schedule.time_to > ${filters.time}
        )
    `

    console.log('Não tem campos vazios')

}

function pageGiveClasses(request, response) {
    const data = request.query
    const isEmpty = Object.keys(data).length == 0

    if (!isEmpty) {

        data.subject = getSubject(data.subject)

        proffys.push(data)
        return response.redirect("/study")
    }
    // Adicionar data à lista de proffys
    return response.render("give-classes.html", { subjects, weekdays })
}

module.exports = {
    pageLanding,
    pageStudy,
    pageGiveClasses
}