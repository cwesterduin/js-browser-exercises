function updateHeading(){
    document.getElementById('heading').style.background = "pink";
}

function newGreeting(){
    document.getElementById('greeting').textContent = "Hello from Ravil and Chris!"
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

module.exports = { updateHeading, newGreeting, addParagraph }
