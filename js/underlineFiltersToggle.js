// кнопки
const allProductsBtn = document.getElementById('allProducts');
const newProductsBtn = document.getElementById('newProducts');
const expectingProductsBtn = document.getElementById('expectingProducts');
const discountedProductsBtn = document.getElementById('discountedProducts');
//Обработчики
allProductsBtn.addEventListener('click', colorationToggle);
newProductsBtn.addEventListener('click', colorationToggle);
expectingProductsBtn.addEventListener('click', colorationToggle);
discountedProductsBtn.addEventListener('click', colorationToggle);
//Функция
function colorationToggle() {
    allProductsBtn.classList.add('colorationToggle');

}