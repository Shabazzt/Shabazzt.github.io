const mainBasketContainer = document.getElementById('basket');
const BASKET_KEY = 'basket';
const basketProducts = JSON.parse(localStorage.getItem(BASKET_KEY)) || [];

let div = document.createElement('div');
div.className = 'basketTitle';
div.innerHTML = `Ваша корзина покупок`;
generateBasket();
//Функция генерирует список товаров в корзине
function generateBasket() {
    let basketHtml = '';
    let total = 0;
    let discountedTotal = 0;
    let discount = 0;
    let discountedPrice = 0;
    basketProducts.forEach((product, index) => {
        total += product.price * product.count;
        discount = parseFloat((product.price * product.discount) / 100).toFixed(2);
        discountedPrice = product.price - discount;
        discountedTotal += discountedPrice * product.count;
        basketHtml += `<div class="basketContainer">
                <img class="basketProductPicture" src=${product.img}>
                <div class="basketProductInfo">
                   <div class="productInfo"><div class="productInfoTitle">Название:</div>${product.title}</div>
                   <div class="productInfo"><div class="productInfoTitle">Цена:</div> ${product.price}$</div>
                   <div class="productInfo"><div class="productInfoTitle">Скидка:</div>${product.discount}%</div>
                   <div class="productInfo"><div class="productInfoTitle">Итого с учетом всех скидок:</div> ${parseFloat((product.price-((product.price*product.discount)/100)) * product.count).toFixed(2)}$</div>
                   <div class="productCount"> 
                      <div class="productInfoTitle">Количество таваров:</div>
                      <button class="productCountBtn" onclick="add(${index}, -1)">
                        <svg height="20px" viewBox="0 0 24 24" width="20px" fill="white"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>  
                      </button>
                      <div>${product.count}</div>
                      <button class="productCountBtn" onclick="add(${index}, 1)">
                        <svg height="20px" viewBox="0 0 24 24" width="20px" fill="white"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                      </button>
                    </div>
                </div>
               <button class="deleteFromBasketBtn" onclick="deleteFromBasket(${index})">Удалить из корзины</button> 
            </div>`
    })
    if (basketHtml === '') {
        basketHtml = `<span style="font-style:italic; text-align:center;">Здесь будут ваши товары</span>`
    } else {
        basketHtml += `<div class="summary"><div class="productInfoTitle">Итого без скидки:</div>${parseFloat(total).toFixed(2)}$</div>
                       <div class="summary"><div class="productInfoTitle">Итого со скидкой:</div>${parseFloat(discountedTotal).toFixed(2)}$</div>
                       <button class="orderBtn">Оформить заказ</button>`
    }
    mainBasketContainer.innerHTML = basketHtml;
    mainBasketContainer.prepend(div);
}

//Добавляет товар в корзину
function addToBasket(productIndex) {
    const count = 1;
    const product = products[productIndex];
    const foundProduct = basketProducts.find(item => item.title === product.title);
    if (foundProduct) {
        foundProduct.count += count;
    } else {
        product.count = count
        basketProducts.push(product);
    }
    generateBasket();
    localStorage.setItem(BASKET_KEY, JSON.stringify(basketProducts))
}
//Увеличить либо уменьшить кол-во товаров
function add(productIndex, num) {
    const product = basketProducts[productIndex];
    product.count = product.count + num;
    if (product.count === 0) {
        basketProducts.splice(productIndex, 1)
    }
    localStorage.setItem(BASKET_KEY, JSON.stringify(basketProducts))
    generateBasket();
}
//Удалить из корзины
function deleteFromBasket(basketItemIndex) {
    basketProducts.splice(basketItemIndex, 1);
    localStorage.setItem(BASKET_KEY, JSON.stringify(basketProducts))
    generateBasket();
}