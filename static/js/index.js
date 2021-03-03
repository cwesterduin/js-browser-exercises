const helpers = require("./helpers");

function initBindings(){
    let heading = document.getElementById('heading')
    let greeting = document.getElementById('greeting')

    heading.addEventListener('click', () => {
        helpers.updateHeading()
    })
    heading.addEventListener('mouseout', () => {
        heading.style.background = "white"
    })

    greeting.addEventListener('mouseover', () => {
        helpers.newGreeting()
    })

    document.addEventListener('keypress', (event) => {
        helpers.addParagraph(event.key)
        console.log(event.key)
    })
}

initBindings();