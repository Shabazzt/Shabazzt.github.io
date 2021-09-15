const basketHeaderIconBtn = document.getElementById('basketHeaderIcon');
basketHeaderIconBtn.addEventListener('click', showBasket);

function showBasket() {
    mainBasketContainer.classList.toggle('opened');
}