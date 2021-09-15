const generalFilterDropDownMenu = document.getElementById('generalFilterDropDownMenu');
const generalFilterTextWindow = document.getElementById('generalFilterTextWindow');
let generalFilterOptions = generalFilter.querySelectorAll('.optionName');
const openGeneralFilterArrow = document.getElementById('openGeneralFilterArrow');
generalFilterTrigger.addEventListener('click', openGeneralFilterMenu);

function openGeneralFilterMenu() {
    generalFilterDropDownMenu.classList.toggle('opened');
    openGeneralFilterArrow.classList.toggle('transformY');
}
for (let i = 0; i < generalFilterOptions.length; i++) {
    let generalFilterOption = generalFilterOptions[i];
    generalFilterOption.addEventListener('click', function(e) {
        let newTextContent = e.target.textContent;
        generalFilterTextWindow.textContent = newTextContent;
    })
}