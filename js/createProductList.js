const productConteiner = document.getElementById('productList');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const paginationButtons = document.getElementsByClassName('pagination-button');
let startIndex = parseInt(localStorage.getItem('startIndex')) || 0;
let itemsPerPage = parseInt(localStorage.getItem('itemsPerPage')) || 9;

changeStartIndex(startIndex);
//Функция генерирует список товаров
function generateProductList(productArray) {
    let html = '';
    localStorage.setItem('startIndex', startIndex);
    localStorage.setItem('itemsPerPage', itemsPerPage);
    for (let i = 0; i < productArray.length; i++) {
        const product = productArray[i];
        let discountedPrice = parseFloat(product.price - (product.price * (product.discount / 100))).toFixed(2);
        html += `<div class="product">
                <a href="${product.productPage}"><img src=${product.img}></a>
                <div class="productPricesInfo">
                    <p class="productTitle">${product.title}</p>
                    <div class="productTitlePricesInfo">
                        <span class="productTitlePricesDiscount">${product.discount} %</span>
                        <div class="productTitlePricesPrice">
                            <span class="productPrice">${product.price}$</span>
                            <span class="productPriceDiscounted">${discountedPrice}$</span>
                        </div>
                        <div class="basketIcon">
                            <label>
                                <svg height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
                            </label>
                        </div>
                    </div>
                </div>
            </div>`

    }
    productConteiner.innerHTML = html;
}

function changeStartIndex(newIndex) {
    startIndex = newIndex;
    disableButtons();
    generateProductList(products.slice(startIndex, startIndex + itemsPerPage));
}

function disableButtons() {
    prevButton.removeAttribute('disabled');
    nextButton.removeAttribute('disabled');
    if (startIndex === 0) {
        prevButton.setAttribute('disabled', '');
    }
    if (startIndex >= (products.length - itemsPerPage)) {
        nextButton.setAttribute('disabled', '');
    }
}