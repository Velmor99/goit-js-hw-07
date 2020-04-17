const controller = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
text.style.fontSize = '50px'


controller.addEventListener('input', evant => {
    text.style.fontSize = evant.currentTarget.value + 'px'
})