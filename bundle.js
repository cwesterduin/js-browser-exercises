(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function updateHeading(){
    document.getElementById('heading').style.background = "pink";
}

function newGreeting(){
    document.getElementById('greeting').textContent = "Hello from Ravil and Chris!"
}

function makeBold(item){
    let para = document.getElementById(item)
    if (para.className === "") {para.className = "bold"}
    else {para.className = ""}
}

function addParagraph(item){
    const newPara = createParagraph(item)
    document.getElementById('content').appendChild(newPara);
}

function createParagraph(item){
    const newPara = document.createElement('p');
    newPara.textContent = item;
    return newPara
}

module.exports = { updateHeading, newGreeting, addParagraph, makeBold }

},{}],2:[function(require,module,exports){
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
},{"./helpers":1}]},{},[2]);
