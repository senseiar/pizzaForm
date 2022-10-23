const form = document.getElementById('form');
const pizza = document.getElementById('pizzaSelect');
const firstName = document.getElementById('firstName');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validate();
});

function validate() {
    const pizzaVal = pizza.value.trim();
    const firstNameVal = firstName.value.trim();

    if (pizzaVal === '') {
        setErrorFor(pizza, "You didn't choose your pizza! Please select one.");
    } else {
        setValidFor(pizza);
    }

    if (!checkStr(firstNameVal)) {
        setErrorFor(firstName, "Your name should be at least 2 chars length and without doesn't consist any special chars");
    } else {
        setValidFor(firstName);
    }


}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const span = formControl.querySelector('.error-hint');
    input.className = 'invalid';

    formControl.className = 'form-control error';
    span.innerText = message;
    
}

function setValidFor(input) {
    const formControl = input.parentElement;
    const span = formControl.querySelector('.error-hint');
    input.className = 'valid';

    formControl.className = 'form-control no-error';
    span.innerText = '';
}

function checkStr(string) {
    regEx = /^[a-zA-Z]{2,}$/;
    
    return regEx.test(string);
}