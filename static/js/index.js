const helpers = require("./helpers");

function initBindings(){
    let heading = document.getElementById('heading')

    heading.addEventListener('click', () => {
        helpers.updateHeading()
    })
    heading.addEventListener('mouseout', () => {
        heading.style.background = "white"
    })
}

initBindings();