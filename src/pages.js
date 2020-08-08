const Database = require('./database/db')

const { subjects, weekdays, getSubject, convertHoursToMinutes } = require('./utils/format')

function pageLanding(request, response) {
    return response.render("index.html")
}

async function pageStudy(request, response) {
    const filters = request.query

    if (!filters.subject || !filters.weekday || !filters.time) {
        return response.render("study.html", { filters, subjects, weekdays } )
    }

    // Convert hours to minutes 
    const timeToMinutes = convertHoursToMinutes(filters.time)

    const query = `
        SELECT classes.*, proffys.* 
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffy_id)
        WHERE EXISTS (
            SELECT class_schedule.* 
            FROM class_schedule
            WHERE class_schedule.class_id = classes.id
            AND class_schedule.weekday = ${filters.weekday}
            AND class_schedule.time_from <= ${timeToMinutes}
            AND class_schedule.time_to > ${timeToMinutes}
        )
        AND classes.subject = '${filters.subject}'
    `

    // if exists any errors on database consults
    try {
        const db = await Database
        const proffys = await db.all(query)

        return response.render('study.html', { proffys, subjects, filters, weekdays })

    } catch (error) {
        console.log(error)
    }


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