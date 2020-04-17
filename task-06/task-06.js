const validInput = document.querySelector('#validation-input');
validInput.style.border = '3px solid #bdbdbd'




validInput.addEventListener('blur', evant => {
    if(evant.currentTarget.value.length !== 6) {
        validInput.style.border = '3px solid #f44336'
    } else {
        validInput.style.border = '3px solid #4caf50'
    }
});