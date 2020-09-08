let pass1;
let pass2;

if (document.getElementById('registration-password') != undefined && document.getElementById('registration-password') != null) {
    pass1 = document.getElementById('registration-password');
}
if (document.getElementById('registration-repeat-password') != undefined && document.getElementById('registration-repeat-password') != null) {
    pass2 = document.getElementById('registration-repeat-password');
}

document.addEventListener('DOMContentLoaded', function () {
    let timerStart = 500;

    //form validate when user keypress simple 
    let sectionInput;
    if (document.querySelectorAll('.section-all-input') != null && document.querySelectorAll('.section-all-input') != undefined) {
        sectionInput = document.querySelectorAll('.section-all-input');
    }

    for (let item of sectionInput) {
        item.addEventListener('focusout', getLabelInput);
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
                validPass = false,
                validNicName = false,
                validValuePass = false;

            for (let item of formRegistration) {
                if (validMail(item) == true && item.type == 'email') {
                    validM = true;
                }
                if (validName(item) == true && item.type == 'text' && item.id == 'registration-name') {
                    validN = true;
                }
                if (validName(item) == true && item.type == 'text' && item.id == 'registration-nic-name') {
                    validNicName = true;
                }
                if (validPasswordRegistration(item) == true && item.type == 'password') {
                    validPass = true;
                }

                if (document.getElementById('registration-password').value == document.getElementById('registration-repeat-password').value) {
                    validValuePass = true
                }
            }



            let allValid = validM && validN && validPass && validNicName && validValuePass;

            if (allValid == false) {
                console.log('false submit');
            } else {
                console.log('true submit');
                alert('done');
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
            let validPass = false;

            for (let item of formLogin) {
                if (validMail(item) == true && item.type == 'email') {
                    validM = true;
                }
                if (validPasswordLogin(item) == true && item.type == 'password') {
                    validPass = true;
                }
            }

            let allValid = validM && validPass;

            if (allValid == false) {
                console.log('false');
            } else {
                console.log('true');
                alert('done');
            }

            return allValid;
        }
    }

    // form-remember-pass
    let formRemeberPass;
    if (document.getElementById('form-remember-pass') != null && document.getElementById('form-remember-pass') != undefined) {
        formRemeberPass = document.getElementById('form-remember-pass');

        formRemeberPass.onsubmit = () => {
            event.preventDefault();

            let validM = false;

            for (let item of formRemeberPass) {
                if (validMail(item) == true && item.type == 'email') {
                    validM = true;
                }
            }

            let allValid = validM;

            if (allValid == false) {
                console.log('false');
            } else {
                console.log('true');
                alert('done');
            }

            return allValid;
        }
    }
});

function validPasswordLogin(input) {
    let valid = true;

    if (input.type == 'password' && input.getAttribute('id') == 'registration-password__login') {
        let divM = input.parentElement.parentElement.children[1];
        if (input.value == '') {
            divM.children[0].innerHTML = `Заполните поле "Пароль`;
            ifInputError(input, divM);
            valid = false;
        } else if (input.value != '' && input.value.length >= 1 && input.value.length < 6) {
            divM.children[0].innerHTML = `Длинна пароля должна быть не менее 6 символов`;
            ifInputError(input, divM);
            valid = false;
        } else {
            ifInputValid(input, divM);
            valid = true;
        }
    }
    return valid;
}


function validPasswordRegistration(input) {
    let valid1 = true;
    let valid2 = true;

    if (input.type == 'password' && pass1.getAttribute('id') == 'registration-password') {
        let divM = input.parentElement.parentElement.children[1];
        if (input.value == '') {

            divM.children[0].innerHTML = `Заполните поле "Пароль`;
            ifInputError(input, divM);
            valid1 = false;
        } else if (input.value != '' && input.value.length >= 1 && input.value.length < 6) {
            divM.children[0].innerHTML = `Длинна пароля должна быть не менее 6 символов`;
            ifInputError(input, divM);
            console.log(divM)
            valid1 = false;
        } else if (input.value != pass2.value && input.value != '' && pass2.value != '' && input.value.length >= 6) {
            let repeatPass = pass2.parentElement.parentElement.children[1];
            divM.children[0].innerHTML = `Пароли не совпадают`;
            ifInputError(input, divM);
            valid1 = false;
        } else {
            ifInputValid(input, divM);
            ifInputValid(pass2, divM);
            valid1 = true;
        }
    } else if (pass2.type == 'password' && pass2.getAttribute('id') == 'registration-repeat-password') {
        let divM = pass2.parentElement.parentElement.children[1];
        if (pass2.value == '') {
            divM.children[0].innerHTML = `Повторите пароль`;
            ifInputError(pass2, divM);
            valid2 = false;
        } else if (pass2.value != pass1.value && pass2.value != '' && pass1.value != '') {
            divM.children[0].innerHTML = `Пароли не совпадают`;
            ifInputError(pass2, divM);
            valid2 = false;
        } else {
            ifInputValid(input, divM);
            ifInputValid(pass1, divM);
            valid2 = true;
        }
    }

    valid = valid1 && valid2;
    return valid;
}


// validate name
let maskName = /^[a-z]$/i;
function validName(item) {
    let valid = true;

    if (item.type == 'text') {
        if (item.value.replace(/ +/g, ' ').trim() == '' && item.parentElement.parentElement.classList.contains('section-nic-name-input') == true) {
            item.parentElement.parentElement.children[1].children[0].innerHTML = `Введите один из контактов Telegram или Skype`;
            let thisDivError = item.parentElement.parentElement.children[1];
            ifInputError(item, thisDivError);
            valid = false;
        } else if (item.parentElement.parentElement.classList.contains('section-nic-name-input') == true && item.value.replace(/ +/g, ' ').trim() != '' && item.value.length >= 1 && item.value.length < 3 && document.querySelector('.section-radio-telegram-input').children[0].children[0].checked) {
            item.parentElement.parentElement.children[1].children[0].innerHTML = `Поле "Telegram" заполнено не верно`;
            let thisDivError = item.parentElement.parentElement.children[1];
            ifInputError(item, thisDivError);
            valid = false;
        } else if (item.parentElement.parentElement.classList.contains('section-nic-name-input') == true && item.value.replace(/ +/g, ' ').trim() != '' && item.value.length >= 1 && item.value.length < 3 && document.querySelector('.section-radio-skype-input').children[0].children[0].checked) {
            item.parentElement.parentElement.children[1].children[0].innerHTML = `Поле "Skype" заполнено не верно`;
            let thisDivError = item.parentElement.parentElement.children[1];
            ifInputError(item, thisDivError);
            valid = false;
        } else if (maskName.test(item.value) == false && item.value.length < 3) {
            if (item.parentElement.parentElement.children[1] != undefined) {
                let thisDivError = item.parentElement.parentElement.children[1];
                ifInputError(item, thisDivError);
                valid = false;
            }
        } else {
            if (item.parentElement.parentElement.children[1] != undefined) {
                let thisDivError = item.parentElement.parentElement.children[1];
                ifInputValid(item, thisDivError);
                valid = true;
            }
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
            ifInputError(item, thisDivError);
            valid = false;
        } else {
            let thisDivError = item.parentElement.parentElement.children[1];
            ifInputValid(item, thisDivError);
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
        if (item.value.replace(/ +/g, ' ').trim() == '' && item.parentElement.parentElement.classList.contains('section-email-input') == true) {
            let thisDivError = item.parentElement.parentElement.children[1];
            ifInputError(item, thisDivError);
            item.parentElement.parentElement.children[1].children[0].innerHTML = `Заполните поле "E-mail"`;
            valid = false;
        } else if (checkMail == false) {
            let thisDivError = item.parentElement.parentElement.children[1];
            item.parentElement.parentElement.children[1].children[0].innerHTML = `Поле "E-mail" заполнено не верно`;
            ifInputError(item, thisDivError);
            valid = false;
        } else {
            let thisDivError = item.parentElement.parentElement.children[1];
            ifInputValid(item, thisDivError);
            valid = true;
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

    input.addEventListener('focusout', () => {
        if (input.type == 'email') {
            if (input.value.replace(/ +/g, ' ').trim() == '' && input.parentElement.parentElement.classList.contains('section-email-input') == true) {
                // let thisDivError = input.parentElement.parentElement.children[1];
                ifInputError(input, divMessage);
                input.parentElement.parentElement.children[1].children[0].innerHTML = `Заполните поле "E-mail"`;
                valid = false;
            } else if (maskMail.test(input.value) == false && divMessage != undefined) {
                input.parentElement.parentElement.children[1].children[0].innerHTML = `Поле "E-mail" заполнено не верно`;
                ifInputError(input, divMessage);
            } else {
                ifInputValid(input, divMessage);
            }
        }
        else if (input.type == 'text') {
            if (input.value.replace(/ +/g, ' ').trim() == '' && input.parentElement.parentElement.classList.contains('section-nic-name-input') == true) {
                input.parentElement.parentElement.children[1].children[0].innerHTML = `Введите один из контактов Telegram или Skype`;
                let thisDivError = input.parentElement.parentElement.children[1];
                ifInputError(input, thisDivError);
                valid = false;
            } else if (input.parentElement.parentElement.classList.contains('section-nic-name-input') == true && input.value.replace(/ +/g, ' ').trim() != '' && input.value.length >= 1 && input.value.length < 3 && document.querySelector('.section-radio-telegram-input').children[0].children[0].checked) {
                input.parentElement.parentElement.children[1].children[0].innerHTML = `Поле "Telegram" заполнено не верно`;
                let thisDivError = input.parentElement.parentElement.children[1];
                ifInputError(input, thisDivError);
                valid = false;
            } else if (input.parentElement.parentElement.classList.contains('section-nic-name-input') == true && input.value.replace(/ +/g, ' ').trim() != '' && input.value.length >= 1 && input.value.length < 3 && document.querySelector('.section-radio-skype-input').children[0].children[0].checked) {
                input.parentElement.parentElement.children[1].children[0].innerHTML = `Поле "Skype" заполнено не верно`;
                let thisDivError = input.parentElement.parentElement.children[1];
                ifInputError(input, thisDivError);
                valid = false;
            } else if (input.value.length < 3 && divMessage != undefined) {
                ifInputError(input, divMessage)
            } else {
                ifInputValid(input, divMessage);
            }
        }
        else if (input.type == 'tel' && divMessage != undefined) {
            if (maskPhone.test(input.value) == false) {
                ifInputError(input, divMessage);
            } else {
                ifInputValid(input, divMessage);
            }
        }
        else if (input.type == 'password' && input.getAttribute('id') == 'registration-password') {
            let divM = input.parentElement.parentElement.children[1];

            if (input.value == '') {
                divM.children[0].innerHTML = `Заполните поле "Пароль`;
                ifInputError(input, divM);
            } else if (input.value != '' && input.value.length >= 1 && input.value.length < 6) {
                divM.children[0].innerHTML = `Длинна пароля должна быть не менее 6 символов`;
                ifInputError(input, divM);
            } if (input.value != pass2.value && input.value != '' && pass2.value != '' && input.value.length >= 6) {
                let repeatPass = pass2.parentElement.parentElement.children[1];
                divM.children[0].innerHTML = `Пароли не совпадают`;
                ifInputError(input, divM);
            }
            // else {
            //     ifInputValid(input, divM);
            //     ifInputValid(pass2, divM);
            // }
        } else if (input.type == 'password' && input.getAttribute('id') == 'registration-repeat-password') {
            let divM = input.parentElement.parentElement.children[1];
            if (input.value == '') {
                divM.children[0].innerHTML = `Повторите пароль`;
                ifInputError(input, divM);
            } else if (input.value != pass1.value && input.value != '' && pass1.value != '') {
                divM.children[0].innerHTML = `Пароли не совпадают`;
                ifInputError(input, divM);
            }
            // else {
            //     ifInputValid(input, divM);
            //     ifInputValid(pass1, divM);
            // }
        }
        else if (input.type == 'password' && input.getAttribute('id') == 'registration-password__login') {
            let divM = input.parentElement.parentElement.children[1];
            console.log('login')
            if (input.value == '') {
                divM.children[0].innerHTML = `Заполните поле "Пароль`;
                ifInputError(input, divM);
            } else if (input.value != '' && input.value.length >= 1 && input.value.length < 6) {
                divM.children[0].innerHTML = `Длинна пароля должна быть не менее 6 символов`;
                ifInputError(input, divM);
            }
        }
    });

    input.addEventListener('focus', () => {
        if (input.classList.contains('input-mail-error') && input.type != 'password') {
            ifInputValid(input, divMessage);
        } else if (input.classList.contains('input-mail-error') && input.getAttribute('id') == 'registration-password') {
            let divM = this.children[1];
            ifInputValid(input, divM)
        }
        if (input.classList.contains('input-mail-error') && input.getAttribute('id') == 'registration-repeat-password') {
            let divM = this.children[1];
            ifInputValid(input, divM);
        }
    });
}



function ifInputValid(input, divMessage) {
    input.classList.remove('input-mail-error');
    input.parentElement.parentElement.classList.remove('error-border');
    if (divMessage != undefined) {
        divMessage.style.display = 'none';
        divMessage.style.visibility = 'hidden';
        divMessage.style.opacity = '0';
    }
}

function ifInputError(input, divMessage) {
    input.classList.add('input-mail-error');
    input.parentElement.parentElement.classList.add('error-border');
    if (divMessage != undefined) {
        divMessage.style.display = 'flex';
        divMessage.style.visibility = 'visible';
        divMessage.style.opacity = '1';
    }
}



