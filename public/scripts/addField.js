document.querySelector("#add-time")
.addEventListener('click', cloneField)

function cloneField() {
    // console.log("Clicou!")
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    const fields = newFieldContainer.querySelectorAll('input')

    //console.log(fields[0].value)
    fields.forEach(function(field) {
        field.value = ""
    })

    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}