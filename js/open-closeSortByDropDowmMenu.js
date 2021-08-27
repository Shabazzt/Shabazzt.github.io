//Начальная область взаимодействия
const sortBySelectedWindow = document.getElementById('sortBySelected');
const sortBySelectedLabel = document.getElementById('sortBySelectedLabel');
let sortByOptions = document.querySelectorAll('.sortByOptions');
//Выпадающее меню
const sortByDropDownMenu = document.getElementById('sortByDropDownMenu');
//Обработчики
sortBySelectedWindow.addEventListener('click', openSortByDropDownMenu);
sortBySelectedLabel.addEventListener('click', openSortByDropDownMenu);
//Функции
//Открыть выпадающее меню
function openSortByDropDownMenu() {
    sortByDropDownMenu.classList.add('opened');
}
//Заменяет текст в окне, на текст по которому кликнули
for (let i = 0; i < sortByOptions.length; i++) {
    let sortByOption = sortByOptions[i];
    sortByOption.addEventListener('click', function(e) {
        let newTextContent = e.target.textContent;
        sortBySelectedWindow.textContent = newTextContent;
    })
}