const filtersOptions = filtersSideBar.querySelectorAll('.optionName');

for (let i = 0; i < filtersOptions.length; i++) {
    let filterOption = filtersOptions[i];

    filterOption.addEventListener('click', function(e) {
        let result = products.filter(function(product) {
            let discountedPrice = parseFloat(product.price - (product.price * (product.discount / 100))).toFixed(2);
            if (parseInt(discountedPrice) <= parseFloat(filterOption.textContent)) {
                return true
            } else {
                return false
            }
        })
        console.log(products, result)
        generateProductList(result);
    })

}