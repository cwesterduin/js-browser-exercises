function updateHeading(){
    document.getElementById('heading').style.background = "pink";
}

function defaultHeading(){
    document.getElementById('heading').style.background = "white";
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

module.exports = { updateHeading, defaultHeading, newGreeting, addParagraph, makeBold }
