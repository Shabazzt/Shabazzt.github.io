//Кнопки
const filterItemTitleBtn = document.getElementById('filterItemTitle');
filterItemTitleBtn.addEventListener('click', openFilterItemOptions);
let itemOptionsDropDownMenu = document.getElementById('itemOptionsDropDownMenu');

function openFilterItemOptions() {
    itemOptionsDropDownMenu.classList.add('opened');
}