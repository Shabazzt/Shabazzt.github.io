//Начальная область взаимодействия
const sortBySelectedWindow = document.getElementById('sortBySelected');
const sortBySelectedLabel = document.getElementById('sortBySelectedLabel');
let sortByOptions = document.querySelectorAll('.sortByOptions');
let timerId = setTimeout(closeSortByDropDownMenu, 2000);
//Выпадающее меню
const sortByDropDownMenu = document.getElementById('sortByDropDownMenu');
//Обработчики
sortBySelectedWindow.addEventListener('click', openSortByDropDownMenu);
sortBySelectedLabel.addEventListener('click', openSortByDropDownMenu);
sortByDropDownMenu.addEventListener('mouseleave', setTimeoutForSortBy);
sortByDropDownMenu.addEventListener('mouseenter', clearTimeoutForSortBy);

//Функции
//Открыть-закрыть выпадающее меню

function closeSortByDropDownMenu() {
    sortByDropDownMenu.classList.remove('opened');
}

function openSortByDropDownMenu() {
    sortByDropDownMenu.classList.add('opened');
}

function setTimeoutForSortBy() {
    setTimeout(closeSortByDropDownMenu, 2000);
}

function clearTimeoutForSortBy() {
    clearTimeout(timerId);
}

//Заменяет текст в окне, на текст по которому кликнули
for (let i = 0; i < sortByOptions.length; i++) {
    let sortByOption = sortByOptions[i];
    sortByOption.addEventListener('click', function(e) {
        let newTextContent = e.target.textContent;
        sortBySelectedWindow.textContent = newTextContent;
    })
}