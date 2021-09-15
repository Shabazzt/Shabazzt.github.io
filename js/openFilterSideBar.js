const filtersStatusBtn = document.getElementById('filtersStatus');
const filtersSideBar = document.getElementById('filtersSideBar');
const productList = document.getElementById('productList');
const filterItems = document.querySelectorAll('.filterItem');
filtersStatusBtn.addEventListener('click', showSideBar);

function showSideBar() {
    filtersSideBar.classList.toggle('opened');
    productList.classList.toggle('modificatedProductList');
    filtersStatusBtn.firstElementChild.classList.toggle('rotate180');
}

for (let i = 0; i < filterItems.length; i++) {
    let filterItem = filterItems[i];
    filterItem.addEventListener('click', function(e) {
        filterItem.lastElementChild.classList.toggle('opened');
        if (filterItem.lastElementChild.classList.contains('opened') === true) {
            filterItem.removeAttribute("downArrow");
            filterItem.setAttribute("upArrow", "upArrow");
        } else {
            filterItem.removeAttribute("upArrow");
            filterItem.setAttribute("downArrow", "downArrow");
        }
    })
}