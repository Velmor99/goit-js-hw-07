const controlPanel = document.querySelector('#controls');
const countBoxes = controlPanel.querySelector('input');
const render = document.querySelector('button[data-action="render"]');
const destroy = document.querySelector('button[data-action="destroy"]');
const display = document.querySelector('#boxes')
let count = 0;
let randomColor1 = Math.floor(Math.random(1) * Math.floor(255));
let randomColor2 = Math.floor(Math.random(1) * Math.floor(255));
let randomColor3 = Math.floor(Math.random(1) * Math.floor(255));
let sizeW = 20;
let sizeH = 20;

countBoxes.addEventListener('blur', evant => {
   count = evant.currentTarget.value;
});

function createBoxes(count) {
    for(let i = 0; i < count; i += 1) {
        const newDiv = document.createElement('div');
        newDiv.style.width = `${sizeW += 10}px`
        newDiv.style.height = `${sizeH += 10}px`
        newDiv.style.backgroundColor = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`
        newDiv.style.margin = '5px'
        display.append(newDiv)
    }
}

render.addEventListener('click', evant => {
    createBoxes(count)
})

function destroyBoxes() {
    display.innerHTML = '';
    sizeW = 20;
    sizeH = 20;
}

destroy.addEventListener('click', evant => {
    destroyBoxes()
});