const editionPicker = document.getElementById('editionPickerContainer');
const editionPickerSelectedEdition = document.getElementById('editionPickerSelectedEdition');
const dropMenu = editionPickerSelectedEdition.querySelector('dropDownMenu');
editionPicker.addEventListener('click', showEditionPickerDropMenu);

function showEditionPickerDropMenu() {
    dropMenu.classList.add('opened');

}