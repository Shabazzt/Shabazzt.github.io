let enterForm = document.getElementById('enter_form');
let enterFormBackground = document.getElementById('background');
let openEnterFormBtn = document.getElementById('enter_into_account');
let closeEnterFormBtn = document.getElementById('close_enter_form');
let fromEnterToopenRegistrationFormBtn = document.getElementById('create_new_account');
let chageToCreateNewAccountBtn = document.getElementById('change_to_create_new_account');

openEnterFormBtn.addEventListener('click', openEnterForm);
closeEnterFormBtn.addEventListener('click', closeEnterForm);
enterFormBackground.addEventListener('click', closeEnterForm);
chageToCreateNewAccountBtn.addEventListener('click', chageToCreateNewAccount);

function openEnterForm() {
    enterForm.classList.add('opened');
    enterFormBackground.classList.add('opened');
}

function closeEnterForm() {
    enterForm.classList.remove('opened');
    enterFormBackground.classList.remove('opened');
}

function chageToCreateNewAccount() {
    fromEnterToopenRegistrationFormBtn.click();
}