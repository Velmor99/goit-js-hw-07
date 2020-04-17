const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

// const _ul = document.querySelector('#ingredients');
// console.log(_ul)

// function createLis(arr) {
//     return arr.map(el => `<li>${el}</li>`)
// }
// console.log(createLis(ingredients));


const _ul = document.querySelector('#ingredients')

const listOne = document.createElement('li');
listOne.textContent = ingredients[0];
const listTwo = document.createElement('li');
listTwo.textContent = ingredients[1];
const listThree = document.createElement('li');
listThree.textContent = ingredients[2];
const listFour = document.createElement('li');
listFour.textContent = ingredients[3];
const listFive = document.createElement('li');
listFive.textContent = ingredients[4];
const listSix = document.createElement('li');
listSix.textContent = ingredients[5];

_ul.append(listOne, listTwo, listThree, listFour, listFive, listSix);

