let greenColor = document.querySelectorAll(`ul > li:nth-of-type(5)`);

for (let i= 0; i < greenColor.length; i++) {
    greenColor[i].setAttribute(`class`, `last`);
}


do {
    number = +prompt(`На котором уровене нужно добавить первому тегу группы - класс first-item (1 2 3)`);
} while (isNaN(number) || !number || number <= 0 || number > 3)


const setFirstItemClassName = (level=number) => {
    let redColor = document.querySelector(`li:nth-of-type(${level}) > ul > li:first-child`);

    redColor.setAttribute(`class`, `first-item`);
}

setTimeout (setFirstItemClassName, 2000);