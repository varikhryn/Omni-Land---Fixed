let pass1;
let pass2,
    newpass1,
    newpass2;

if (document.getElementById('registration-password') != undefined && document.getElementById('registration-password') != null) {
    pass1 = document.getElementById('registration-password');
}
if (document.getElementById('registration-repeat-password') != undefined && document.getElementById('registration-repeat-password') != null) {
    pass2 = document.getElementById('registration-repeat-password');
}

if (document.getElementById('new-password') != undefined && document.getElementById('new-password') != null) {
    newpass1 = document.getElementById('new-password');
}
if (document.getElementById('registration-repeat-new-password') != undefined && document.getElementById('registration-repeat-new-password') != null) {
    newpass2 = document.getElementById('registration-repeat-new-password');
}

let maskNicTelegram = /^[@]{1}[a-z][a-z0-9_](?:[_]?[a-z0-9])*$/;

let maskPhone = /^[+]{1}[0-9]{12}$/;

document.addEventListener('DOMContentLoaded', function () {
    let timerStart = 500;

    //form validate when user keypress simple 
    let sectionInput;
    if (document.querySelectorAll('.section-all-input') != null && document.querySelectorAll('.section-all-input') != undefined) {
        sectionInput = document.querySelectorAll('.section-all-input');
    }

    document.addEventListener('click', function (e) {
        // 'show-pop-up-enter' 'show-pop-up-remember-pass' 'show-pop-up-registration') 
        if (e.target.id != 'close__pop-up__new_password' && e.target.id != 'close__pop-up__login' && e.target.id != 'close__pop-up__registration' && e.target.id != 'close__pop-up__remember-pass' && (document.getElementById('form-enter').contains(e.target) || document.getElementById('form-registration').contains(e.target) || document.getElementById('form-remember-pass').contains(e.target) || document.getElementById('form-new_password').contains(e.target))) {
            for (let item of sectionInput) {
                item.addEventListener('focusout', getLabelInput);
                item.addEventListener('click', getLabelInput);
            }
        } else {
            for (let item of sectionInput) {
                ifInputValid(item.children[0].children[2], item.children[1]);
            }
        }
    });

    let popUpOoops,
        formRegistration,
        formLogin,
        newPassword;

    //form registration
    if (document.getElementById('form-registration') != null && document.getElementById('form-registration') != undefined) {
        formRegistration = document.getElementById('form-registration');

        formRegistration.onsubmit = (event) => {
            event.preventDefault();

            let validN = false,
                validM = false,
                validPass = false,
                validNicName = false,
                validValuePass = false,
                validNicTelegram = false,
                validNicPhone = true;

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

                if (validName(item) == true && item.classList.contains('nic_name_telegram') == true) {

                    validNicTelegram = true;
                }

                // if (validName(item) == false && item.classList.contains('nic__phone__telegram') == true) {
                //     console.log(validName(item));
                //     validNicPhone = false;
                // }
            }

            let allValid = validM && validN && validPass && validNicName && validValuePass && validNicTelegram && validNicPhone;

            if (allValid == false) {
                console.log('false submit');
            } else {
                console.log('true submit');
                alert('done');
            }

            return allValid;
        }
    }

    //form new password
    if (document.getElementById('form-new_password') != null && document.getElementById('form-new_password') != undefined) {
        newPassword = document.getElementById('form-new_password');

        newPassword.onsubmit = (event) => {
            event.preventDefault();

            let validPassNew = false,
                validValuePassNew = false;

            for (let item of newPassword) {
                if (validPasswordNew(item) == true && item.type == 'password') {
                    validPassNew = true;
                }

                if (document.getElementById('new-password').value == document.getElementById('registration-repeat-new-password').value) {
                    validValuePassNew = true
                }

            }

            console.log(validPassNew)
            let allValidNew = validPassNew && validValuePassNew;

            if (allValidNew == false) {
                console.log('false submit');
            } else {
                console.log('true submit');
                alert('done');
            }

            return allValidNew;
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
                if (document.querySelector('.input-sbm-true').classList.contains('sbm-form-remember-pass') == true) {
                    document.querySelector('.input-sbm-true').classList.remove('sbm-form-remember-pass')
                }

                if (document.querySelector('.form-sbm-true').classList.contains('form-sbm-true_show') == false) {
                    document.querySelector('.form-sbm-true').classList.add('form-sbm-true_show')
                }
            } else {
                console.log('true');
                // document.querySelector('.input-sbm-true').style.display = 'flex';
                document.querySelector('.input-sbm-true').classList.add('sbm-form-remember-pass');
                document.querySelector('.form-sbm-true').classList.add('form-sbm-true_show');
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
            divM.children[0].innerHTML = `Заполните поле "Пароль"`;
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

            divM.children[0].innerHTML = `Заполните поле "Пароль"`;
            ifInputError(input, divM);
            valid1 = false;
        } else if (input.value != '' && input.value.length >= 1 && input.value.length < 6) {
            divM.children[0].innerHTML = `Длинна пароля должна быть не менее 6 символов`;
            ifInputError(input, divM);
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

function validPasswordNew(input) {
    let valid1 = true;
    let valid2 = true;

    if (input.type == 'password' && newpass1.getAttribute('id') == 'new-password') {
        let divM = input.parentElement.parentElement.children[1];
        if (input.value == '') {
            divM.children[0].innerHTML = `Заполните поле "Пароль"`;
            ifInputError(input, divM);
            valid1 = false;
        } else if (input.value != '' && input.value.length >= 1 && input.value.length < 6) {
            divM.children[0].innerHTML = `Длинна пароля должна быть не менее 6 символов`;
            ifInputError(input, divM);
            valid1 = false;
        } else if (input.value != newpass2.value && input.value != '' && newpass2.value != '' && input.value.length >= 6) {
            let repeatPass = newpass2.parentElement.parentElement.children[1];
            divM.children[0].innerHTML = `Пароли не совпадают`;
            ifInputError(input, divM);
            valid1 = false;
        } else {
            ifInputValid(input, divM);
            ifInputValid(pass2, divM);
            valid1 = true;
        }
    } else if (newpass2.type == 'password' && newpass2.getAttribute('id') == 'registration-repeat-new-password') {
        let divM = newpass2.parentElement.parentElement.children[1];
        if (newpass2.value == '') {
            divM.children[0].innerHTML = `Повторите пароль`;
            ifInputError(newpass2, divM);
            valid2 = false;
        } else if (newpass2.value != pass1.value && newpass2.value != '' && newpass1.value != '') {
            divM.children[0].innerHTML = `Пароли не совпадают`;
            ifInputError(newpass2, divM);
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
// let maskNicTelegram = /[@][a-z0-9_]/i;


function validName(item) {
    let valid = true;

    if (item.type == 'text') {
        // if (item.value.replace(/ +/g, ' ').trim() == '' && item.parentElement.parentElement.classList.contains('section-nic-name-input') == true) {
        //     item.parentElement.parentElement.children[1].children[0].innerHTML = `Введите один из контактов Telegram или Skype`;
        //     let thisDivError = item.parentElement.parentElement.children[1];
        //     ifInputError(item, thisDivError);
        //     valid = false;
        // } else 
        // if (item.parentElement.parentElement.classList.contains('section-nic-name-input') == true && item.classList.contains('nic__phone__telegram') == true && item.value.replace(/ +/g, ' ').trim() != '' && maskPhone.test(item.value) == false && item.value.length > 1 && item.value.length < 13 && document.querySelector('.section-radio-telegram-input').children[0].children[0].checked) {
        //     item.parentElement.parentElement.children[1].children[0].innerHTML = `Некорректный номер телефона. Формат: 380000000000`;
        //     let thisDivError = item.parentElement.parentElement.children[1];
        //     ifInputError(item, thisDivError);
        //     valid = false;
        // } else
        // if (item.parentElement.parentElement.classList.contains('section-nic-name-input') == true && item.classList.contains('nic__phone__telegram') == true && item.value.replace(/ +/g, ' ').trim() != '' && maskPhone.test(item.value) == false && item.value.length == 13 && document.querySelector('.section-radio-telegram-input').children[0].children[0].checked) {
        //     item.parentElement.parentElement.children[1].children[0].innerHTML = `Некорректный номер телефона. Формат: 380000000000`;
        //     let thisDivError = item.parentElement.parentElement.children[1];
        //     ifInputError(item, thisDivError);
        //     valid = false;
        // } else
        if (item.value.replace(/ +/g, ' ').trim() == '' && item.parentElement.parentElement.classList.contains('section-nic-name-input') == true && document.querySelector('.section-radio-telegram-input').children[0].children[0].checked) {
            item.parentElement.parentElement.children[1].children[0].innerHTML = `Поле "Telegram" заполнено не верно`;
            let thisDivError = item.parentElement.parentElement.children[1];
            ifInputError(item, thisDivError);
            valid = false;
        } else
            if (item.value.replace(/ +/g, ' ').trim() == '' && item.parentElement.parentElement.classList.contains('section-nic-name-input') == true && document.querySelector('.section-radio-skype-input').children[0].children[0].checked) {
                item.parentElement.parentElement.children[1].children[0].innerHTML = `Поле "Skype" заполнено не верно`;
                let thisDivError = item.parentElement.parentElement.children[1];
                ifInputError(item, thisDivError);
                valid = false;
            } else
                if (item.parentElement.parentElement.classList.contains('section-nic-name-input') == true && item.value.replace(/ +/g, ' ').trim() != '' && item.value.length >= 1 && item.value.length < 6 && document.querySelector('.section-radio-telegram-input').children[0].children[0].checked) {
                    item.parentElement.parentElement.children[1].children[0].innerHTML = `Поле "Telegram" заполнено не верно. Минимальная длина - 5 символов.`;
                    let thisDivError = item.parentElement.parentElement.children[1];
                    ifInputError(item, thisDivError);
                    valid = false;
                } else
                    if (item.parentElement.parentElement.classList.contains('section-nic-name-input') == true && item.classList.contains('nic_name_telegram') == true && item.value.replace(/ +/g, ' ').trim() != '' && maskNicTelegram.test(item.value) == false && item.value.length >= 6 && document.querySelector('.section-radio-telegram-input').children[0].children[0].checked) {
                        item.parentElement.parentElement.children[1].children[0].innerHTML = `Допустимые символы: a-z, 0-9, _.`;
                        let thisDivError = item.parentElement.parentElement.children[1];
                        ifInputError(item, thisDivError);
                        valid = false;
                    } else
                        if (item.parentElement.parentElement.classList.contains('section-nic-name-input') == true && item.value.replace(/ +/g, ' ').trim() != '' && item.value.length >= 1 && item.value.length < 6 && document.querySelector('.section-radio-skype-input').children[0].children[0].checked) {
                            item.parentElement.parentElement.children[1].children[0].innerHTML = `Поле "Skype" заполнено не верно`;
                            let thisDivError = item.parentElement.parentElement.children[1];
                            ifInputError(item, thisDivError);
                            valid = false;
                        } else
                            // test when other symbol
                            if (item.parentElement.parentElement.classList.contains('section-nic-name-input') == true && item.value.replace(/ +/g, ' ').trim() != '' && maskNicTelegram.test(item.value) == false && document.querySelector('.section-radio-telegram-input').children[0].children[0].checked) {
                                item.parentElement.parentElement.children[1].children[0].innerHTML = `Допустимые символы: a-z, 0-9, _.`;
                                let thisDivError = item.parentElement.parentElement.children[1];
                                ifInputError(item, thisDivError);
                                valid = false;
                            } else
                                if (maskName.test(item.value) == false && item.value.length < 3) {
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
function getLabelInput(e) {
    if (document.querySelector('body').classList.contains('show-pop-up-enter') == true || document.querySelector('body').classList.contains('show-pop-up-remember-pass') == true || document.querySelector('body').classList.contains('show-pop-up-registration') == true || document.querySelector('body').classList.contains('show-pop-up-new-pass') == true) {
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

        input.addEventListener('focusout', (e) => {
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
                // if (input.value.replace(/ +/g, ' ').trim() == '' && input.parentElement.parentElement.classList.contains('section-nic-name-input') == true) {
                //     input.parentElement.parentElement.children[1].children[0].innerHTML = `Введите один из контактов Telegram или Skype`;
                //     let thisDivError = input.parentElement.parentElement.children[1];
                //     ifInputError(input, thisDivError);
                //     valid = false;
                // } else 
                // if (input.parentElement.parentElement.classList.contains('section-nic-name-input') == true && input.classList.contains('nic__phone__telegram') == true && input.value.replace(/ +/g, ' ').trim() != '' && maskPhone.test(input.value) == false && input.value.length > 1 && input.value.length < 13 && document.querySelector('.section-radio-telegram-input').children[0].children[0].checked) {
                //     console.log(input.value[0])
                //     input.parentElement.parentElement.children[1].children[0].innerHTML = `Некорректный номер телефона. Формат: 380000000000`;
                //     let thisDivError = input.parentElement.parentElement.children[1];
                //     ifInputError(input, thisDivError);
                //     valid = false;
                // }
                // else
                if (input.value.replace(/ +/g, ' ').trim() == '' && input.parentElement.parentElement.classList.contains('section-nic-name-input') == true && document.querySelector('.section-radio-telegram-input').children[0].children[0].checked) {
                    input.parentElement.parentElement.children[1].children[0].innerHTML = `Поле "Telegram" заполнено не верно`;
                    let thisDivError = input.parentElement.parentElement.children[1];
                    ifInputError(input, thisDivError);
                    valid = false;
                }
                else
                    if (input.value.replace(/ +/g, ' ').trim() == '' && input.parentElement.parentElement.classList.contains('section-nic-name-input') == true && document.querySelector('.section-radio-skype-input').children[0].children[0].checked) {
                        input.parentElement.parentElement.children[1].children[0].innerHTML = `Поле "Skype" заполнено не верно`;
                        let thisDivError = input.parentElement.parentElement.children[1];
                        ifInputError(input, thisDivError);
                        valid = false;
                    }
                    else
                        if (input.parentElement.parentElement.classList.contains('section-nic-name-input') == true && input.value.replace(/ +/g, ' ').trim() != '' && input.value.length >= 1 && input.value.length < 6 && document.querySelector('.section-radio-telegram-input').children[0].children[0].checked) {
                            input.parentElement.parentElement.children[1].children[0].innerHTML = `Поле "Telegram" заполнено не верно. Минимальная длина - 5 символов.`;
                            let thisDivError = input.parentElement.parentElement.children[1];
                            ifInputError(input, thisDivError);
                            valid = false;
                        }
                        else
                            if (input.parentElement.parentElement.classList.contains('section-nic-name-input') == true && input.classList.contains('nic_name_telegram') == true && input.value.replace(/ +/g, ' ').trim() != '' && maskNicTelegram.test(input.value) == false && input.value.length >= 1 && document.querySelector('.section-radio-telegram-input').children[0].children[0].checked) {
                                input.parentElement.parentElement.children[1].children[0].innerHTML = `Допустимые символы: a-z, 0-9, _.`;
                                let thisDivError = input.parentElement.parentElement.children[1];
                                ifInputError(input, thisDivError);
                                valid = false;
                            }
                            else if (input.parentElement.parentElement.classList.contains('section-nic-name-input') == true && input.value.replace(/ +/g, ' ').trim() != '' && input.value.length >= 1 && input.value.length < 6 && document.querySelector('.section-radio-skype-input').children[0].children[0].checked) {
                                input.parentElement.parentElement.children[1].children[0].innerHTML = `Поле "Skype" заполнено не верно`;
                                let thisDivError = input.parentElement.parentElement.children[1];
                                ifInputError(input, thisDivError);
                                valid = false;
                            } else
                                // test when other symbol
                                if (input.parentElement.parentElement.classList.contains('section-nic-name-input') == true && input.value.replace(/ +/g, ' ').trim() != '' && maskNicTelegram.test(input.value) == false && document.querySelector('.section-radio-telegram-input').children[0].children[0].checked) {
                                    input.parentElement.parentElement.children[1].children[0].innerHTML = `Допустимые символы: a-z, 0-9, _.`;
                                    let thisDivError = input.parentElement.parentElement.children[1];
                                    ifInputError(input, thisDivError);
                                    valid = false;
                                } else
                                    if (input.value.length < 3 && divMessage != undefined) {
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
                    divM.children[0].innerHTML = `Заполните поле "Пароль"`;
                    ifInputError(input, divM);
                } else if (input.value != '' && input.value.length >= 1 && input.value.length < 6) {
                    divM.children[0].innerHTML = `Длинна пароля должна быть не менее 6 символов`;
                    ifInputError(input, divM);
                } if (input.value != pass2.value && input.value != '' && pass2.value != '' && input.value.length >= 6) {
                    let repeatPass = pass2.parentElement.parentElement.children[1];
                    divM.children[0].innerHTML = `Пароли не совпадают`;
                    ifInputError(input, divM);
                }
            } else if (input.type == 'password' && input.getAttribute('id') == 'registration-repeat-password') {
                let divM = input.parentElement.parentElement.children[1];
                if (input.value == '') {
                    divM.children[0].innerHTML = `Повторите пароль`;
                    ifInputError(input, divM);
                } else if (input.value != pass1.value && input.value != '' && pass1.value != '') {
                    divM.children[0].innerHTML = `Пароли не совпадают`;
                    ifInputError(input, divM);
                }
            } else if (input.type == 'password' && input.getAttribute('id') == 'new-password') {
                //new
                console.log('click new pass');
                let divM = input.parentElement.parentElement.children[1];

                if (input.value == '') {
                    divM.children[0].innerHTML = `Заполните поле "Пароль"`;
                    ifInputError(input, divM);
                } else if (input.value != '' && input.value.length >= 1 && input.value.length < 6) {
                    divM.children[0].innerHTML = `Длинна пароля должна быть не менее 6 символов`;
                    ifInputError(input, divM);
                } if (input.value != newpass2.value && input.value != '' && newpass2.value != '' && input.value.length >= 6) {
                    let repeatPass = newpass2.parentElement.parentElement.children[1];
                    divM.children[0].innerHTML = `Пароли не совпадают`;
                    ifInputError(input, divM);
                }
            } else if (input.type == 'password' && input.getAttribute('id') == 'registration-repeat-new-password') {
                console.log('click repeat new pass');
                let divM = input.parentElement.parentElement.children[1];
                if (input.value == '') {
                    divM.children[0].innerHTML = `Повторите пароль`;
                    ifInputError(input, divM);
                } else if (input.value != newpass1.value && input.value != '' && newpass1.value != '') {
                    divM.children[0].innerHTML = `Пароли не совпадают`;
                    ifInputError(input, divM);
                }
            }
            else if (input.type == 'password' && input.getAttribute('id') == 'registration-password__login') {
                let divM = input.parentElement.parentElement.children[1];
                if (input.value == '') {
                    divM.children[0].innerHTML = `Заполните поле "Пароль"`;
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
                ifInputValid(input, divM);
            } else if (input.classList.contains('input-mail-error') && input.getAttribute('id') == 'new-password') {
                let divM = this.children[1];
                ifInputValid(input, divM);
            } else {
                let divM = this.children[1];
                ifInputValid(input, divM);
            }
            if (input.classList.contains('input-mail-error') && input.getAttribute('id') == 'registration-repeat-password') {
                let divM = this.children[1];
                ifInputValid(input, divM);
            }

            if (input.classList.contains('input-mail-error') && input.getAttribute('id') == 'registration-repeat-new-password') {
                let divM = this.children[1];
                ifInputValid(input, divM);
            }
        });
    }
}

function ifInputValid(input, divMessage) {
    if (input != undefined && input != null) {
        input.classList.remove('input-mail-error');
        input.parentElement.parentElement.classList.remove('error-border');
    }
    if (divMessage != undefined) {
        divMessage.style.display = 'none';
        divMessage.style.visibility = 'hidden';
        divMessage.style.opacity = '0';
    }
}

function ifInputError(input, divMessage) {
    if (input != undefined && input != null) {
        input.classList.add('input-mail-error');
        input.parentElement.parentElement.classList.add('error-border');
    }
    if (divMessage != undefined) {
        divMessage.style.display = 'flex';
        divMessage.style.visibility = 'visible';
        divMessage.style.opacity = '1';
    }
}



