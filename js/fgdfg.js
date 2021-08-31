const catalogFiltersSideBar = document.getElementById('filtersSideBar');
let filterItemTitles = document.querySelectorAll('.filterItemTitle');
let filterItemOptions = document.querySelectorAll('.filterItemOptions');
let dropDownMenus = document.querySelectorAll('.dropDownMenu');

for (let i = 0; i < filterItemTitles.length; i++) {
    let filterItemTitle = filterItemTitles[i];
    filterItemTitle.addEventListener('click', function(e) {
        if (filterItemTitle.contains('opened')) {
            dropDownMenu.classList.remove('opened');
            filterItemPrice.removeAttribute("upArrow");
            filterItemPrice.setAttribute("downArrow", "downArrow");
        } else {
            dropDownMenu.classList.add('opened');
            filterItemPrice.removeAttribute("downArrow");
            filterItemPrice.setAttribute("upArrow", "upArrow");
        }
    })
}