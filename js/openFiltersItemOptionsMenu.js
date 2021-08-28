//Блок "Цена"
//Кнопки
const filterItemTitlePriceOpenBtn = document.getElementById('filterItemTitlePriceOpen');
const filterItemTitlePriceCloseBtn = document.getElementById('filterItemTitlePriceClose');
//Обработчик
filterItemTitlePriceOpenBtn.addEventListener('click', openFilterItemOptionsPrice);
filterItemTitlePriceCloseBtn.addEventListener('click', closeFilterItemOptionsPrice);
//Выпадающее меню
let itemOptionsPriceDropDownMenu = document.getElementById('itemOptionsPriceDropDownMenu');
//Весь блок
let filterItemPrice = document.getElementById('filterItemPrice');
//Функции
function openFilterItemOptionsPrice() {
    itemOptionsPriceDropDownMenu.classList.add('opened');
    filterItemTitlePriceOpenBtn.classList.add('closed');
    filterItemTitlePriceCloseBtn.classList.remove('closed');
    filterItemPrice.removeAttribute("downArrow");
    filterItemPrice.setAttribute("upArrow", "upArrow");
}

function closeFilterItemOptionsPrice() {
    itemOptionsPriceDropDownMenu.classList.remove('opened');
    filterItemTitlePriceOpenBtn.classList.remove('closed');
    filterItemTitlePriceCloseBtn.classList.add('closed');
    filterItemPrice.removeAttribute("upArrow");
    filterItemPrice.setAttribute("downArrow", "downArrow");
}

//Блок "Система"
const filterItemTitleSystemOpenBtn = document.getElementById('filterItemTitleSystemOpen');
const filterItemTitleSystemCloseBtn = document.getElementById('filterItemTitleSystemClose');
//Выпадающее меню
let itemOptionsSystemDropDownMenu = document.getElementById('itemOptionsSystemDropDownMenu');
//Обработчик
filterItemTitleSystemOpenBtn.addEventListener('click', openFilterItemOptionsSystem);
filterItemTitleSystemCloseBtn.addEventListener('click', closeFilterItemOptionsSystem);
//Блок
const filterItemSystem = document.getElementById('filterItemSystem');
//Функции
function openFilterItemOptionsSystem() {
    itemOptionsSystemDropDownMenu.classList.add('opened');
    filterItemTitleSystemOpenBtn.classList.add('closed');
    filterItemTitleSystemCloseBtn.classList.remove('closed');
    filterItemSystem.removeAttribute("downArrow");
    filterItemSystem.setAttribute("upArrow", "upArrow");
}

function closeFilterItemOptionsSystem() {
    itemOptionsSystemDropDownMenu.classList.remove('opened');
    filterItemTitleSystemOpenBtn.classList.remove('closed');
    filterItemTitleSystemCloseBtn.classList.add('closed');
    filterItemSystem.removeAttribute("upArrow");
    filterItemSystem.setAttribute("downArrow", "downArrow");
}

//Блок "Особенности"
const filterItemTitleFeaturesOpenBtn = document.getElementById('filterItemTitleFeaturesOpen');
const filterItemTitleFeaturesCloseBtn = document.getElementById('filterItemTitleFeaturesClose');
//Выпадающее меню
let itemOptionsFeaturesDropDownMenu = document.getElementById('itemOptionsFeaturesDropDownMenu');
//Обработчик
filterItemTitleFeaturesOpenBtn.addEventListener('click', openFilterItemOptionsFeatures);
filterItemTitleFeaturesCloseBtn.addEventListener('click', closeFilterItemOptionsFeatures);
//Блок
const filterItemFeatures = document.getElementById('filterItemFeatures');
//Функции
function openFilterItemOptionsFeatures() {
    itemOptionsFeaturesDropDownMenu.classList.add('opened');
    filterItemTitleFeaturesOpenBtn.classList.add('closed');
    filterItemTitleFeaturesCloseBtn.classList.remove('closed');
    filterItemFeatures.removeAttribute("downArrow");
    filterItemFeatures.setAttribute("upArrow", "upArrow");
}

function closeFilterItemOptionsFeatures() {
    itemOptionsFeaturesDropDownMenu.classList.remove('opened');
    filterItemTitleFeaturesOpenBtn.classList.remove('closed');
    filterItemTitleFeaturesCloseBtn.classList.add('closed');
    filterItemFeatures.removeAttribute("upArrow");
    filterItemFeatures.setAttribute("downArrow", "downArrow");
}


//Блок "Язык"
const filterItemTitleLanguagesOpenBtn = document.getElementById('filterItemTitleLanguagesOpen');
const filterItemTitleLanguagesCloseBtn = document.getElementById('filterItemTitleLanguagesClose');
//Выпадающее меню
let itemOptionsLanguagesDropDownMenu = document.getElementById('itemOptionsLanguagesDropDownMenu');
//Обработчик
filterItemTitleLanguagesOpenBtn.addEventListener('click', openFilterItemOptionsLanguages);
filterItemTitleLanguagesCloseBtn.addEventListener('click', closeFilterItemOptionsLanguages);
//Блок
const filterItemLanguages = document.getElementById('filterItemLanguages');
//Функции
function openFilterItemOptionsLanguages() {
    itemOptionsLanguagesDropDownMenu.classList.add('opened');
    filterItemTitleLanguagesOpenBtn.classList.add('closed');
    filterItemTitleLanguagesCloseBtn.classList.remove('closed');
    filterItemLanguages.removeAttribute("downArrow");
    filterItemLanguages.setAttribute("upArrow", "upArrow");
}

function closeFilterItemOptionsLanguages() {
    itemOptionsLanguagesDropDownMenu.classList.remove('opened');
    filterItemTitleLanguagesOpenBtn.classList.remove('closed');
    filterItemTitleLanguagesCloseBtn.classList.add('closed');
    filterItemLanguages.removeAttribute("upArrow");
    filterItemLanguages.setAttribute("downArrow", "downArrow");
}

//Блок "Дополнения"
const filterItemTitleDlcOpenBtn = document.getElementById('filterItemTitleDlcOpen');
const filterItemTitleDlcCloseBtn = document.getElementById('filterItemTitleDlcClose');
//Выпадающее меню
let itemOptionsDlcDropDownMenu = document.getElementById('itemOptionsDlcDropDownMenu');
//Обработчик
filterItemTitleDlcOpenBtn.addEventListener('click', openFilterItemOptionsDlc);
filterItemTitleDlcCloseBtn.addEventListener('click', closeFilterItemOptionsDlc);
//Блок
const filterItemDlc = document.getElementById('filterItemDlc');
//Функции
function openFilterItemOptionsDlc() {
    itemOptionsDlcDropDownMenu.classList.add('opened');
    filterItemTitleDlcOpenBtn.classList.add('closed');
    filterItemTitleDlcCloseBtn.classList.remove('closed');
    filterItemDlc.removeAttribute("downArrow");
    filterItemDlc.setAttribute("upArrow", "upArrow");
}

function closeFilterItemOptionsDlc() {
    itemOptionsDlcDropDownMenu.classList.remove('opened');
    filterItemTitleDlcOpenBtn.classList.remove('closed');
    filterItemTitleDlcCloseBtn.classList.add('closed');
    filterItemDlc.removeAttribute("upArrow");
    filterItemDlc.setAttribute("downArrow", "downArrow");
}

filterItemPrice.addEventListener('change', (e) => {
    console.log(e)
})