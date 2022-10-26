const form = document.getElementById('form');
const pizza = document.getElementById('pizzaSelect');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const street = document.getElementById('street');
const houseNum = document.getElementById('houseNum');
const flatNum = document.getElementById('flatNum');
const paymentMethod = document.getElementById('paymentMethod');
const change = document.getElementById('change');
const successMsg = document.querySelector('.success-wrapper');

let maskOptions = {
    mask: '+{38}(000)000-00-00',
};

let mask = IMask(phone, maskOptions); 
let isValidForm = true;
let inputs = [form, pizza, firstName, lastName, email, phone, street,
    houseNum, flatNum, paymentMethod, change];

function validate() {
    const pizzaVal = pizza.value.trim();
    const firstNameVal = firstName.value.trim();
    const lastNameVal = lastName.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const streetVal = street.value.trim();
    const houseNumVal = houseNum.value.trim();
    const flatNumVal = flatNum.value.trim();
    const paymentMethodVal = paymentMethod.value.trim();
    const changeVal = change.value.trim();

    if (pizzaVal === '') {
        setErrorFor(pizza, "You didn't choose your pizza! Please select one.");
    } else {
        setValidFor(pizza);
    }

    if (!checkStr(firstNameVal)) {
        setErrorFor(firstName, "Name is too short or has invalid characters");
    } else {
        setValidFor(firstName);
    }

    if (!checkStr(lastNameVal)) {
        setErrorFor(lastName, "Lastname is too short or has invalid characters");
    } else {
        setValidFor(lastName);
    }

    if (!checkEmail(emailVal)) {
        setErrorFor(email, "Please, enter a valid email");
    } else {
        setValidFor(email);
    }

    if (!checkPhone(phoneVal)) {
        setErrorFor(phone, "Please, enter a valid phone");
    } else {
        setValidFor(phone);
    }

    if (!checkStr(streetVal)) {
        setErrorFor(street, "Street name is too short or has invalid characters");
    } else {
        setValidFor(street);
    }

    if (houseNumVal < 1) {
        setErrorFor(houseNum, "House number is incorrect");
    } else {
        setValidFor(houseNum);
    }

    if (flatNumVal < 1) {
        setErrorFor(flatNum, "Flat number is incorrect");
    } else {
        setValidFor(flatNum);
    }

    if (paymentMethodVal === '') {
        setErrorFor(paymentMethod, "Please, select a payment method");
    } else {
        setValidFor(paymentMethod);
    }

    if (changeVal < 1) {
        setErrorFor(change, "Please, enter a correct sum");
    } else {
        setValidFor(change);
    }

    inputs.forEach(input => {
        if (input.className == 'invalid') {
            isValidForm = false;
            console.log(isValidForm);
        }
        else {
            isValidForm = true;
        }
        
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
    if (isValidForm) {
        console.log('send data');
        form.style.display = "none";
        successMsg.style.display = "flex";
    }
    
        
});

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

function checkStr(str) {
    let regEx = /^[a-zA-Z]{2,}$/;
    
    return regEx.test(str);
}

function checkEmail(em) {
    let regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    return regEx.test(em);
}

function checkPhone(str) {
    return /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}/.test(str);
}