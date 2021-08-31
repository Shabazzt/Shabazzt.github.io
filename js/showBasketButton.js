let productList = document.querySelectorAll('product');

let productTitlePricesInfoList = document.querySelectorAll('productTitlePricesInfo');
for (let i = 0; i < productList.length; i++) {
    let productItem = productList[i];
    productItem.addEventListener('click', function(e) {
        let newTextContent = e.target.textContent;
        console.log(newTextContent);
    });


}
for (let i = 0; i < productTitlePricesInfoList.length; i++) {
    let productTitlePricesInfo = productTitlePricesInfoList[i];

}

function addBasketIcon() {

}