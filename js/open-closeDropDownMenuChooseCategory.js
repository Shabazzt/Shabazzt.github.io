const dropDownMenuCategories = document.getElementById('dropDownMenuCategories');
const searchCategoriesOpenMenuBlock = document.getElementById('searchCategoriesOpenMenu');
const searchCategoriesCloseMenuBlock = document.getElementById('searchCategoriesCloseMenu');

const openDropDownMenuChooseCategoryBtn = document.getElementById('openChooseCategory');
const closeDropDownMenuChooseCategoryBtn = document.getElementById('closeChooseCategory');
//Добавляю действие по клику
openDropDownMenuChooseCategoryBtn.addEventListener('click', openMenuChooseCategory);
closeDropDownMenuChooseCategoryBtn.addEventListener('click', closeMenuChooseCategory);
//Функция для открытия выпадающего меню
function openMenuChooseCategory() {
    dropDownMenuCategories.classList.add('opened');
    //Убираю отображение кнопки открытия выпадающего меню
    searchCategoriesOpenMenuBlock.classList.add('closed');
    //Добавляю отображение кнопки закрытия
    searchCategoriesCloseMenuBlock.classList.remove('closed');
}

//Функция для закрытия выпадающего меню
function closeMenuChooseCategory() {
    dropDownMenuCategories.classList.remove('opened');
    //Убираю отображение кнопки закрытия выпадающего меню
    searchCategoriesOpenMenuBlock.classList.remove('closed');
    //Добавляю отображение кнопки открытия
    searchCategoriesCloseMenuBlock.classList.add('closed');
}