const increment = document.querySelector('button[data-action="increment"]');
const decrement = document.querySelector('button[data-action="decrement"]');
let counterValue = document.querySelector('#value');
let count = 0;

increment.addEventListener('click', evant => {
   count += 1;
   counterValue.innerHTML = count

});

decrement.addEventListener('click', evant => {
   count -= 1;
   counterValue.innerHTML = count
});