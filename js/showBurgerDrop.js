const menuBox = document.getElementById('menuBox');
let menuItems = menuBox.querySelectorAll('.menu-item');

for (let i = 0; i < menuItems.length; i++) {
    let menuItem = menuItems[i];
    menuItem.addEventListener('click', function(e) {
        menuItem.nextElementSibling.classList.toggle('opened');
    })
}