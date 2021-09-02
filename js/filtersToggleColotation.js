// кнопки
let filtersToggleOptions = document.querySelectorAll('.filtersToggleOption');
//Обработчики

for (let i = 0; i < filtersToggleOptions.length; i++) {
    let filtersToggleOption = filtersToggleOptions[i];
    filtersToggleOption.addEventListener('click', function(e) {
        this.classList.toggle('coloration');
        this.classList.toggle('colorationUnderline');
    });
};