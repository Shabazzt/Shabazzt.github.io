//Начальная область взаимодействия
const sortBySelectedWindow = document.getElementById('sortBySelected');
const sortBySelectedLabel = document.getElementById('sortBySelectedLabel');
const sortByTrigger = document.getElementById('sortByTrigger');
let sortByOptions = sortByTrigger.querySelectorAll('.optionName');
let timerId = 0;
//Выпадающее меню
const sortByDropDownMenu = document.getElementById('sortByDropDownMenu');
//Обработчики
sortByTrigger.addEventListener('click', openSortByDropDownMenu);
sortByDropDownMenu.addEventListener('mouseleave', setTimeoutForSortBy);
sortByDropDownMenu.addEventListener('mouseenter', () => clearTimeout(timerId));

//Функции
//Открыть-закрыть выпадающее меню

function openSortByDropDownMenu() {
    sortByDropDownMenu.classList.toggle('opened');
}

function closeSortByDropDownMenu() {
    sortByDropDownMenu.classList.remove('opened');
}

function setTimeoutForSortBy() {
    timerId = setTimeout(closeSortByDropDownMenu, 2000);
}

//Заменяет текст в окне, на текст по которому кликнули
for (let k = 0; k < sortByOptions.length; k++) {
    let sortByOption = sortByOptions[k];
    sortByOption.addEventListener('click', function(e) {
        let newTextContent = e.target.textContent;
        sortBySelectedWindow.textContent = newTextContent;
    })
}