// кнопки
const allProductsBtn = document.getElementById('allProducts');
const newProductsBtn = document.getElementById('newProducts');
const expectingProductsBtn = document.getElementById('expectingProducts');
const discountedProductsBtn = document.getElementById('discountedProducts');
//Обработчики
allProductsBtn.addEventListener('click', colorationToggleAll);
newProductsBtn.addEventListener('click', colorationToggleNew);
expectingProductsBtn.addEventListener('click', colorationToggleExpecting);
discountedProductsBtn.addEventListener('click', colorationToggleDiscounted);
//Функция
function colorationToggleAll() {
    allProductsBtn.classList.add('coloration', 'colorationUnderline');
    newProductsBtn.classList.remove('coloration', 'colorationUnderline');
    expectingProductsBtn.classList.remove('coloration', 'colorationUnderline');
    discountedProductsBtn.classList.remove('coloration', 'colorationUnderline');
}

function colorationToggleNew() {
    allProductsBtn.classList.remove('coloration', 'colorationUnderline');
    newProductsBtn.classList.add('coloration', 'colorationUnderline');
    expectingProductsBtn.classList.remove('coloration', 'colorationUnderline');
    discountedProductsBtn.classList.remove('coloration', 'colorationUnderline');
}

function colorationToggleExpecting() {
    allProductsBtn.classList.remove('coloration', 'colorationUnderline');
    newProductsBtn.classList.remove('coloration', 'colorationUnderline');
    expectingProductsBtn.classList.add('coloration', 'colorationUnderline');
    discountedProductsBtn.classList.remove('coloration', 'colorationUnderline');
}

function colorationToggleDiscounted() {
    allProductsBtn.classList.remove('coloration', 'colorationUnderline');
    newProductsBtn.classList.remove('coloration', 'colorationUnderline');
    expectingProductsBtn.classList.remove('coloration', 'colorationUnderline');
    discountedProductsBtn.classList.add('coloration', 'colorationUnderline');
}