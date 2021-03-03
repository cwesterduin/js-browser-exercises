function updateHeading(){
    document.getElementById('heading').style.background = "pink";
}

function newGreeting(){
    document.getElementById('greeting').textContent = "Hello from Ravil and Chris!"
}


module.exports = { updateHeading, newGreeting }
