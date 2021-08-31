let registrationForm = document.getElementById('registrationForm');
let registrationFormBackground = document.getElementById('background');
let openRegistrationFormBtn = document.getElementById('createNewAccount');
let closeRegistrationFormBtn = document.getElementById('closeRegistrationForm');

openRegistrationFormBtn.addEventListener('click', openRegistrationForm);
closeRegistrationFormBtn.addEventListener('click', closeRegistrationForm);
registrationFormBackground.addEventListener('click', closeRegistrationForm);

function openRegistrationForm() {
    registrationForm.classList.add('opened');
    registrationFormBackground.classList.add('opened');
    document.body.classList.add('hideScroll');
}

function closeRegistrationForm() {
    registrationForm.classList.remove('opened');
    registrationFormBackground.classList.remove('opened');
    document.body.classList.remove('hideScroll');
}