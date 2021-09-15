let basketIconBtns = document.querySelectorAll('.basketIcon');
for (let i = 0; i < basketIconBtns.length; i++) {
    basketIconBtns[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        addToBasket(i);
    })
}
//Считает количество товаров в корзине
function cartNumbers(product) {
    console.log(product);
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        basketHeaderIconBtn.querySelector('span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        basketHeaderIconBtn.querySelector('span').textContent = 1;
    }
}
//Проверяет и сопостовляет чему равно количество товаров в корзине с локальным хранилищем при загрузке страницы
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        basketHeaderIconBtn.querySelector('span').textContent = productNumbers;
    }
}
onLoadCartNumbers();