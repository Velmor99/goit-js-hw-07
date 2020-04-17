const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const _ul = document.querySelector('#ingredients');
console.log(_ul)

function createLis(arr) {
    return arr.map(el => {
      const listItem = document.createElement('li');
      listItem.textContent = el;
      return listItem;
    })
}


_ul.append(...createLis(ingredients));

