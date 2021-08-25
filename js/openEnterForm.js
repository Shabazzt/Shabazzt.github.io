let enterForm = document.getElementById('enterForm');
let enterFormBackground = document.getElementById('background');
let openEnterFormBtn = document.getElementById('enterIntoAccount');
let closeEnterFormBtn = document.getElementById('closeEnterForm');
let switchToRegistrationFormBtn = document.getElementById('changeToCreateNewAccount');

openEnterFormBtn.addEventListener('click', openEnterForm);
closeEnterFormBtn.addEventListener('click', closeEnterForm);
enterFormBackground.addEventListener('click', closeEnterForm);
switchToRegistrationFormBtn.addEventListener('click', switchToCreateNewAccount);

function openEnterForm() {
    enterForm.classList.add('opened');
    enterFormBackground.classList.add('opened');
}

function closeEnterForm() {
    enterForm.classList.remove('opened');
    enterFormBackground.classList.remove('opened');
}

function switchToCreateNewAccount() {
    closeEnterForm();
    openRegistrationForm();
}