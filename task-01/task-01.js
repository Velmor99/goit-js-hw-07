const lis = document.querySelectorAll('.item');
console.log(lis)
lis.forEach(li => {
    const title = li.querySelector("h2").textContent;
    const numberOfItem = li.querySelectorAll("li").length;
    return console.log(`Категория: ${title}, Количество элементов: ${numberOfItem}`)
})
