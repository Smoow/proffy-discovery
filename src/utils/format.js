const subjects = [
    "Biologia",
    "Matemática",
    "Química",
    "Física",
    "Literatura",
    "Português",
    "História",
    "Geografia",
    "Filosofia",
    "Sociologia",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubject(subjectNumber) {
    const arrayPosition = +subjectNumber - 1
    return subjects[arrayPosition]
}

module.exports = {
    subjects,
    weekdays,
    getSubject
}