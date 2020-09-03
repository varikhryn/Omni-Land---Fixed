document.addEventListener('DOMContentLoaded', function () {
    let timerStart = 500;

    //form validate when user keypress simple 
    let sectionInput;
    if (document.querySelectorAll('.section-all-input') != null && document.querySelectorAll('.section-all-input') != undefined) {
        sectionInput = document.querySelectorAll('.section-all-input');
    }

    for (let item of sectionInput) {
        item.addEventListener('click', getLabelInput);
    }

    let popUpOoops,
        formRegistration,
        formLogin;

    //form registration
    if (document.getElementById('form-registration') != null && document.getElementById('form-registration') != undefined) {
        formRegistration = document.getElementById('form-registration');

        formRegistration.onsubmit = () => {
            event.preventDefault();

            let validN = false,
                validM = false,
                validPass = false;


            let pass1 = document.getElementById('registration-password');
            let pass2 = document.getElementById('registration-repeat-password');

            if (pass1.value == pass2.value && pass1.value.length > 4 && pass2.value.length > 4) {
                validPass = true;
                console.log('true');

                let divAct = pass1.parentElement.parentElement.children[1];
                console.log(pass1.parentElement.parentElement.children[1]);
                divAct.style.display = 'none';
                divAct.style.visibility = 'hidden';
                divAct.style.opacity = '1';
            } else {
                let divAct = pass1.parentElement.parentElement.children[1];
                console.log(pass1.parentElement.parentElement.children[1]);
                divAct.style.display = 'flex';
                divAct.style.visibility = 'visible';
                divAct.style.opacity = '1';
            }

            for (let item of formRegistration) {
                if (validMail(item) == true && item.type == 'email') {
                    validM = true;
                }
                if (validName(item) == true && item.type == 'text') {
                    validN = true;
                }
            }

            let allValid = validM && validN;

            if (allValid == false) {
                console.log('false');
            } else {
                console.log('true');
            }

            return allValid;
        }
    }

    //form login
    if (document.getElementById('form-enter') != null && document.getElementById('form-enter') != undefined) {
        formLogin = document.getElementById('form-enter');

        formLogin.onsubmit = () => {
            event.preventDefault();

            let validM = false;

            for (let item of formLogin) {
                if (validMail(item) == true && item.type == 'email') {
                    validM = true;
                }
            }

            let allValid = validM;

            if (allValid == false) {
                console.log('false');
            } else {
                console.log('true');
            }

            return allValid;
        }
    }
});


// validate name
let maskName = /^[a-z]$/i;
function validName(item) {
    let valid = true;

    if (item.type == 'text') {
        console.log(item.value.length)
        if (maskName.test(item.value) == false && item.value.length < 3) {
            if (item.parentElement.parentElement.children[1] != undefined) {
                let thisDivError = item.parentElement.parentElement.children[1];

                item.classList.add('input-mail-error');
                item.parentElement.parentElement.classList.add('error-border');

                thisDivError.style.display = 'flex';
                thisDivError.style.visibility = 'visible';
                thisDivError.style.opacity = '1';
                valid = false;
            }
        } else {
            if (item.parentElement.parentElement.children[1] != undefined) {
                let thisDivError = item.parentElement.parentElement.children[1];

                item.classList.remove('input-mail-error');
                item.parentElement.parentElement.classList.remove('error-border');

                thisDivError.style.display = 'none';
                thisDivError.style.visibility = 'hidden';
                thisDivError.style.opacity = '0';
                valid = true;
            }
        }
    }

    return valid;
}


// validate checkbox
function validCheckbox(item) {
    let valid = true;

    if (item.type == 'checkbox') {
        if (item.checked == false) {
            item.parentElement.parentElement.style.color = 'red';
            item.parentElement.parentElement.children[1].style.color = 'red';
            valid = false;
        } else {
            item.parentElement.parentElement.style.color = '#3A1551';
            item.parentElement.parentElement.children[1].style.color = '#3A1551';
        }
    }

    return valid;
}

// validate phone number
let maskPhone = /^\+[\d]{2}\ \([\d]{2,3}\)\ [\d]{2,3} - [\d]{2,3} - [\d]{2,3}$/;
function validPhone(item) {
    let valid = true;

    if (item.type == 'tel') {
        if (maskPhone.test(item.value) == false) {
            let thisDivError = item.parentElement.parentElement.children[1];

            item.classList.add('input-mail-error');
            item.parentElement.parentElement.classList.add('error-border');

            thisDivError.style.display = 'flex';
            thisDivError.style.visibility = 'visible';
            thisDivError.style.opacity = '1';
            valid = false;
        } else {
            let thisDivError = item.parentElement.parentElement.children[1];

            item.classList.remove('input-mail-error');
            item.parentElement.parentElement.classList.remove('error-border');

            thisDivError.style.display = 'none';
            thisDivError.style.visibility = 'hidden';
            thisDivError.style.opacity = '0';
            valid = true;
        }
    }
    return valid;
}

// validate mail
let maskMail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
function validMail(item) {
    let valid = true;

    let checkMail = maskMail.test(item.value);
    if (item.type == 'email') {
        if (checkMail == false) {
            let thisDivError = item.parentElement.parentElement.children[1];

            item.classList.add('input-mail-error');
            item.parentElement.parentElement.classList.add('error-border');

            thisDivError.style.display = 'flex';
            thisDivError.style.visibility = 'visible';
            thisDivError.style.opacity = '1';

            valid = false;
        } else {
            let thisDivError = item.parentElement.parentElement.children[1];

            item.classList.remove('input-mail-error');
            item.parentElement.parentElement.classList.remove('error-border');

            thisDivError.style.display = 'none';
            thisDivError.style.visibility = 'hidden';
            thisDivError.style.opacity = '0';

            valid = false;
        }
    }
    return valid;
}

// input + label
function getLabelInput() {
    let input = this.querySelector('input');
    let label = this.querySelector('label');
    let divMessage;
    if (this.querySelector('.input-mail-error__message') != null && this.querySelector('.input-mail-error__message') != undefined) {
        divMessage = this.querySelector('.input-mail-error__message');
    }

    input.addEventListener('input', () => {
        if (input.value == '') {
            if (label != null) {
                label.classList.remove('active-field-input');
            }
        } else {
            if (label != null) {
                label.classList.add('active-field-input');
            }
        }
    })

    input.addEventListener('focusin', () => {
        if (input.value == '') {
            if (label != null) {
                label.classList.remove('active-field-input');
            }
        } else {
            if (label != null) {
                label.classList.add('active-field-input');
            }
        }
    })

    input.addEventListener('keypress', () => {
        if (label != null) {
            label.classList.add('active-field-input');
        }
    });

    input.addEventListener('blur', () => {
        if (input.type == 'email') {
            if (maskMail.test(input.value) == false && divMessage != undefined) {
                input.classList.add('input-mail-error');
                input.parentElement.parentElement.classList.add('error-border');
                divMessage.style.display = 'flex';
                divMessage.style.visibility = 'visible';
                divMessage.style.opacity = '1';
            } else {
                input.classList.remove('input-mail-error');
                input.parentElement.parentElement.classList.remove('error-border');
                divMessage.style.display = 'none';
                divMessage.style.visibility = 'hidden';
                divMessage.style.opacity = '0';
            }
        }
        else if (input.type == 'text') {
            if (input.value.length < 3 && divMessage != undefined) {
                input.classList.add('input-mail-error');
                input.parentElement.parentElement.classList.add('error-border');
                divMessage.style.display = 'flex';
                divMessage.style.visibility = 'visible';
                divMessage.style.opacity = '1';
            } else {
                input.classList.remove('input-mail-error');
                input.parentElement.parentElement.classList.remove('error-border');
                divMessage.style.display = 'none';
                divMessage.style.visibility = 'hidden';
                divMessage.style.opacity = '0';
            }
        }
        else if (input.type == 'tel' && divMessage != undefined) {
            if (maskPhone.test(input.value) == false) {
                input.classList.add('input-mail-error');
                input.parentElement.parentElement.classList.add('error-border');
                divMessage.style.display = 'flex';
                divMessage.style.visibility = 'visible';
                divMessage.style.opacity = '1';
            } else {
                input.classList.remove('input-mail-error');
                input.parentElement.parentElement.classList.remove('error-border');
                divMessage.style.display = 'none';
                divMessage.style.visibility = 'hidden';
                divMessage.style.opacity = '0';
            }
        }
        else if (input.type == 'password') {
            if (input.value < 4 && divMessage != undefined) {
                input.classList.add('input-mail-error');
                input.parentElement.parentElement.classList.add('error-border');
                divMessage.style.display = 'flex';
                divMessage.style.visibility = 'visible';
                divMessage.style.opacity = '1';
            } else {
                input.classList.remove('input-mail-error');
                input.parentElement.parentElement.classList.remove('error-border');
                divMessage.style.display = 'none';
                divMessage.style.visibility = 'hidden';
                divMessage.style.opacity = '0';
            }
        }
    });

    input.addEventListener('focus', () => {
        if (input.classList.contains('input-mail-error')) {
            input.classList.remove('input-mail-error');
            input.parentElement.parentElement.classList.remove('error-border');
            divMessage.style.display = 'none';
            divMessage.style.visibility = 'hidden';
            divMessage.style.opacity = '0';
        }
    });
}

