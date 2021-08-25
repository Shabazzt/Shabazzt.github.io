//Кнопки
const openFilterSideBarBtn = document.getElementById('openFilterSideBar');
const closeFilterSideBarBtn = document.getElementById('closeFilterSideBar');
const filtersStatusTextBtn = document.getElementById('filtersStatusText');
//Данные
const filtersSideBar = document.getElementById('filtersSideBar');
const productList = document.getElementById('productList');
//Обработчики на кнопки
openFilterSideBarBtn.addEventListener('click', openFilterSideBar);
closeFilterSideBarBtn.addEventListener('click', closeFilterSideBar);
filtersStatusTextBtn.addEventListener('click', );
//Функции
function openFilterSideBar() {
    filtersSideBar.classList.add('opened');
    productList.classList.add('modificatedProductList');
    openFilterSideBarBtn.classList.add('closed');
    closeFilterSideBarBtn.classList.remove('closed');
}

function closeFilterSideBar() {
    filtersSideBar.classList.remove('opened');
    productList.classList.remove('modificatedProductList');
    openFilterSideBarBtn.classList.remove('closed');
    closeFilterSideBarBtn.classList.add('closed');
}