const inputName = document.querySelector('#name-input');
const yourName = document.querySelector('#name-output');


inputName.addEventListener('input', evant => {
    if(evant.currentTarget.value.length > 0) {
    yourName.innerHTML = evant.currentTarget.value
} else {
    yourName.innerHTML = 'незнакомец'
}
})