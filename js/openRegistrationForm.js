let registrationForm = document.getElementById('registration_form');
let registrationFormBackground = document.getElementById('background');
let openRegistrationFormBtn = document.getElementById('create_new_account');
let closeRegistrationFormBtn = document.getElementById('close_registration_form');

openRegistrationFormBtn.addEventListener('click', openRegistrationForm);
closeRegistrationFormBtn.addEventListener('click', closeRegistrationForm);
registrationFormBackground.addEventListener('click', closeRegistrationForm);

function openRegistrationForm() {
    registrationForm.classList.add('opened');
    registrationFormBackground.classList.add('opened');
}

function closeRegistrationForm() {
    registrationForm.classList.remove('opened');
    registrationFormBackground.classList.remove('opened');
}