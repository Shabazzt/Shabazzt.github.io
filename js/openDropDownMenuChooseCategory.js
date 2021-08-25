const openDropDownMenuChooseCategoryBtn = document.getElementById('chooseCategory');
const dropDownMenuCategories = document.getElementById('dropDownMenuCategories');

openDropDownMenuChooseCategoryBtn.addEventListener('click', openMenuChooseCategory);

function openMenuChooseCategory() {
    dropDownMenuCategories.classList.add('openedDropDownMenu');

}