const filtersStatus = document.getElementById('filtersStatus');
const filtersSideBar = document.getElementById('filtersSideBar');
const productList = document.getElementById('productList');
filtersStatus.addEventListener('click', showSideBar);

function showSideBar() {
    filtersSideBar.classList.toggle('opened');
    productList.classList.toggle('modificatedProductList');
}