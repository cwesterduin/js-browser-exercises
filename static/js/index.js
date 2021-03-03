const helpers = require("./helpers");

function initBindings(){
    let heading = document.getElementById('heading')
    let greeting = document.getElementById('greeting')
    let navItems = document.getElementsByClassName('nav-item')

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

    for (let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener('click', () => {
            helpers.makeBold(`item-${i + 1}-para`)
        })
    }
}

initBindings();