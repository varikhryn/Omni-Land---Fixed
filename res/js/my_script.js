let timerStart = 0;

let inputNicName,
    spanSetNicName,
    popUpLogin,
    popUpRegistration,
    mobileBtnLogin,
    mobileBtnRegistration,
    openRegistrationMainBlock,
    openRegistrationIncreaseIncome,
    linkForOpenRegistration,
    linkForOpenLogin,
    allBtnReg,
    allBtnLogin;

if (document.getElementById('registration-nic-name') != null && document.getElementById('registration-nic-name') != undefined) {
    inputNicName = document.getElementById('registration-nic-name');
}

if (document.getElementById('registration-nic-name__span') != null && document.getElementById('registration-nic-name__span') != undefined) {
    spanSetNicName = document.getElementById('registration-nic-name__span');
}

if (document.getElementById('section__pop-up__login') != null && document.getElementById('section__pop-up__login') != undefined) {
    popUpLogin = document.getElementById('section__pop-up__login');
}

if (document.getElementById('section__pop-up__registration') != null && document.getElementById('section__pop-up__registration') != undefined) {
    popUpRegistration = document.getElementById('section__pop-up__registration');
}

if (document.getElementById('mobile_btn_login') != null && document.getElementById('mobile_btn_login') != undefined) {
    mobileBtnLogin = document.getElementById('mobile_btn_login');
}

if (document.getElementById('mobile_btn_registration') != null && document.getElementById('mobile_btn_registration') != undefined) {
    mobileBtnRegistration = document.getElementById('mobile_btn_registration');
}

if (document.getElementById('btn_open_registrtion__main-block') != null && document.getElementById('btn_open_registrtion__main-block') != undefined) {
    openRegistrationMainBlock = document.getElementById('btn_open_registrtion__main-block');
    openRegistrationMainBlock.onclick = openPopUpRegistration;
}

if (document.getElementById('btn_open_registrtion__increase-income') != null && document.getElementById('btn_open_registrtion__increase-income') != undefined) {
    openRegistrationIncreaseIncome = document.getElementById('btn_open_registrtion__increase-income');
    openRegistrationIncreaseIncome.onclick = openPopUpRegistration;
}

if (document.getElementById('link__for_refistration') != null && document.getElementById('link__for_refistration') != undefined) {
    linkForOpenRegistration = document.getElementById('link__for_refistration');
}

if (document.getElementById('link__for_login') != null && document.getElementById('link__for_login') != undefined) {
    linkForOpenLogin = document.getElementById('link__for_login');
}

let popUpRememberPass;
if (document.getElementById('section__pop-up__remember-pass') != null && document.getElementById('section__pop-up__remember-pass') != undefined) {
    popUpRememberPass = document.getElementById('section__pop-up__remember-pass');
}

// new password
let popUpNewPassword;
if (document.getElementById('section__pop-up__new_password') != null && document.getElementById('section__pop-up__new_password') != undefined) {
    popUpNewPassword = document.getElementById('section__pop-up__new_password')
}

let btnpopUpNewPassword;
if (document.getElementById('close__pop-up__new_password') != null && document.getElementById('close__pop-up__new_password') != undefined) {
    btnpopUpNewPassword = document.getElementById('close__pop-up__new_password')
}

// error account
let popUpErrorAccount;
if (document.getElementById('pop-up_error-account') != null && document.getElementById('pop-up_error-account') != undefined) {
    popUpErrorAccount = document.getElementById('pop-up_error-account');
}


document.addEventListener('DOMContentLoaded', function () {

    if (window.location.hash == "#section__pop-up__login") {
        openPopUpLogin();
        document.body.classList.add('show-pop-up-enter');
    }

    if (window.location.hash == "#section__pop-up__registration") {
        openPopUpRegistration();
        document.body.classList.add('show-pop-up-registration');
    }

    if (window.location.hash == "#section__pop-up__remember-pass") {
        openPopUpRememberPass();
        document.body.classList.add('show-pop-up-remember-pass');
    }

    // new password
    if (window.location.hash == "#new_password") {
        openPopUpNewPass();
        document.body.classList.add('show-pop-up-new-pass');
    }

    // error account
    if (window.location.hash == "#error-account") {
        openPopUpErrorAccount();
        document.body.classList.add('show-pop-up-error-account');
    }

    if (document.body.classList.contains('show-pop-up-error-account') == true) {
        openPopUpErrorAccount();
        window.location.hash == "#error-account";
    }

    let allRadioMesenger = document.querySelectorAll('.choose-messanger');

    for (let item of allRadioMesenger) {
        item.onchange = chooseName;
    }

    // open pop-up Login
    if (window.innerWidth > 1024) {
        if (document.querySelectorAll('.btn__open__login') != null && document.querySelectorAll('.btn__open__login') != undefined) {
            allBtnLogin = document.querySelectorAll('.btn__open__login')

            for (let item of allBtnLogin) {
                item.onclick = openPopUpLogin;
            }

        }
    }

    if (document.getElementById('open-modal_remember_pass') != null && document.getElementById('open-modal_remember_pass') != undefined) {
        document.getElementById('open-modal_remember_pass').onclick = openPopUpRememberPass;
    }

    if (document.getElementById('close__pop-up__remember-pass') != null && document.getElementById('close__pop-up__remember-pass') != undefined) {
        document.getElementById('close__pop-up__remember-pass').onclick = closePopUpRememberPass;
    }

    // close pop-up Login
    if (document.getElementById('close__pop-up__login') != null && document.getElementById('close__pop-up__login') != undefined) {
        document.getElementById('close__pop-up__login').onclick = closePopUpLogin;
    }

    // section login
    let sectionLogin;
    if (document.querySelector('.section__form__login') != null && document.querySelector('.section__form__login') != undefined) {
        sectionLogin = document.querySelector('.section__form__login');
    }

    let sectionRememberPass;
    if (document.querySelector('.section__form__remember-pass') != null && document.querySelector('.section__form__remember-pass') != undefined) {
        sectionRememberPass = document.querySelector('.section__form__remember-pass');
    }

    let sectionNewPass;
    if (document.querySelector('.section__form__new_password') != null && document.querySelector('.section__form__new_password') != undefined) {
        sectionNewPass = document.querySelector('.section__form__new_password');
    }

    let sectionErrorAccount;
    if (document.querySelector('.section__error-account') != null && document.querySelector('.section__error-account') != undefined) {
        sectionErrorAccount = document.querySelector('.section__error-account');
    }

    document.addEventListener('click', function (e) {
        // close pop-up login when click other smt
        if (document.body.classList.contains('show-pop-up-enter') == true) {

            if (!sectionLogin.contains(e.target) && e.target.id != 'btn__open__login' && !mobileBtnLogin.contains(e.target) && !linkForOpenLogin.contains(e.target)) {
                closePopUpLogin();
                scrollEnable();
            }
        }

        if (document.body.classList.contains('show-pop-up-remember-pass') == true) {
            // open-modal_remember_pass
            if (!sectionRememberPass.contains(e.target) && e.target.id != 'open-modal_remember_pass') {
                closePopUpRememberPass();
                scrollEnable();
            }
        }

        // new password
        if (document.body.classList.contains('show-pop-up-new-pass') == true) {
            if (!sectionNewPass.contains(e.target)) {
                closePopUpNewPass();
                scrollEnable();
            }
        }

        // error account
        // section__error-account
        if (document.body.classList.contains('show-pop-up-error-account') == true) {
            if (!sectionErrorAccount.contains(e.target)) {
                closePopUpErrorAccount();
                scrollEnable();
            }
        }

        // close pop-up registration when click other smt
        if (document.body.classList.contains('show-pop-up-registration') == true) {
            if (openRegistrationMainBlock == undefined && openRegistrationMainBlock == null && openRegistrationIncreaseIncome == undefined && openRegistrationIncreaseIncome == null) {
                if (!sectionRegistration.contains(e.target) && e.target.id != 'btn__open__registration' && !linkForOpenRegistration.contains(e.target) && !mobileBtnRegistration.contains(e.target) && document.querySelector('body').classList.contains('show-pop-up-registration') == true) {
                    setHidden(popUpRegistration);
                    scrollEnable();
                    document.querySelector('body').classList.remove('show-pop-up-registration');
                    if (window.location.hash == "#section__pop-up__registration") {
                        remove_hash_from_url();
                    }
                }
            } else if (!sectionRegistration.contains(e.target) && e.target.id != 'btn__open__registration' && !linkForOpenRegistration.contains(e.target) && !mobileBtnRegistration.contains(e.target) && document.querySelector('body').classList.contains('show-pop-up-registration') == true && !openRegistrationMainBlock.contains(e.target) && !openRegistrationIncreaseIncome.contains(e.target)) {
                setHidden(popUpRegistration);
                scrollEnable();
                document.querySelector('body').classList.remove('show-pop-up-registration');
                if (window.location.hash == "#section__pop-up__registration") {
                    remove_hash_from_url();
                }
            }
        }

    });

    // open pop-up registration
    if (document.querySelectorAll('.btn__open__registration') != null && document.querySelectorAll('.btn__open__registration') != undefined) {
        allBtnReg = document.querySelectorAll('.btn__open__registration');

        for (let item of allBtnReg) {
            item.onclick = openPopUpRegistration;
        }
    }

    // close pop-up Registration
    if (document.getElementById('close__pop-up__registration') != null && document.getElementById('close__pop-up__registration') != undefined) {
        document.getElementById('close__pop-up__registration').onclick = closePopUpRegistration;
    }

    // section registration
    let sectionRegistration;
    if (document.querySelector('.section__form__registration') != null && document.querySelector('.section__form__registration') != undefined) {
        sectionRegistration = document.querySelector('.section__form__registration');
    }

    // only mobile

    // open pop-up Login
    mobileBtnLogin.onclick = openPopUpLogin;

    // close pop up new password
    btnpopUpNewPassword.onclick = closePopUpNewPass;

    // open pop-up Registration
    mobileBtnRegistration.onclick = openPopUpRegistration;

    // close pop up error account "X"
    if (document.getElementById('close__pop-up_error-account') != null && document.getElementById('close__pop-up_error-account') != undefined) {
        document.getElementById('close__pop-up_error-account').onclick = closePopUpErrorAccount;
    }

    // close pop up error account "OK"
    if (document.getElementById('btn-ok_error-account') != null && document.getElementById('btn-ok_error-account') != undefined) {
        document.getElementById('btn-ok_error-account').onclick = closePopUpErrorAccount;
    }

    linkForOpenRegistration.onclick = openPopUpRegistrationCloseLogin;
    linkForOpenLogin.onclick = openPopUpLoginCloseRegistration;

    // tab on slider
    let sliderLink = document.querySelectorAll('.t-slds .t-slds__container a.tn-atom');
    for (let item of sliderLink) {
        item.setAttribute('tabindex', '-1');
    }

    // input only skype or telegegram
    let maskName = /^[a-z]$/i;
    // let maskPhone = /^[0-9]$/i;
    // let maskPhonePress = /^[0-9]*$/i;
    let input = document.getElementById('registration-nic-name');

    // when page load and look for input.value[0]
    // if (input.value[0] == '+' || maskPhone.test(input.value[0]) == true) {
    //     input.classList.add('nic__phone__telegram');
    //     input.setAttribute('maxlength', '13');
    // } else 
    if (input.value[0] == '@') {
        input.classList.add('nic_name_telegram');
    }

    input.addEventListener('input', showTypeForInputNic);

    function showTypeForInputNic() {
        let inputTelegram = document.querySelector('input.choose-messanger_telegram');
        let inputSkype = document.querySelector('input.choose-messanger_skype');
        let input = document.getElementById('registration-nic-name');

        if (inputTelegram.checked) {

            // if ((this.value[0] == 0 || this.value[0] == 1 || this.value[0] == 2 || this.value[0] == 3 || this.value[0] == 4 || this.value[0] == 5 || this.value[0] == 6 || this.value[0] == 7 || this.value[0] == 8 || this.value[0] == 9)) {
            // if (maskPhone.test(this.value[0]) == true) {
            //     console.log(maskPhonePress.test(this.value));
            //     this.setAttribute('maxlength', '13');

            //     if (this.classList.contains('nic_name_telegram') == true || this.value[0] == '+') {
            //         this.classList.remove('nic_name_telegram')
            //     }
            //     this.classList.add('nic__phone__telegram');

            //     this.value = this.value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})/g, "+$1$2$3$4");
            // } else 
            if (this.value[0] == undefined) {
                this.value = this.value
            } else
                if (maskName.test(this.value[0]) == true) {
                    // if (this.hasAttribute('maxlength')) {
                    //     this.removeAttribute('maxlength');
                    // }

                    // if (this.classList.contains('nic__phone__telegram') == true) {
                    //     this.classList.remove('nic__phone__telegram')
                    // }

                    this.classList.add('nic_name_telegram');
                    input.value = '@' + input.value;
                } else
                    if (this.value[0] == '@') {
                        // if (this.hasAttribute('maxlength')) {
                        //     this.removeAttribute('maxlength');
                        // }

                        // if (this.classList.contains('nic__phone__telegram') == true) {
                        //     this.classList.remove('nic__phone__telegram')
                        // }

                        this.classList.add('nic_name_telegram');
                        input.value = input.value;
                    }
        }
    }

});

let lastFocusedElement;
function tabIndex(modal) {
    lastFocusedElement = document.activeElement;

    modal.classList.add('modal--visible');

    var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
    var focusableElements = modal.querySelectorAll(focusableElementsString);

    focusableElements = Array.prototype.slice.call(focusableElements);

    var firstTabStop = focusableElements[0];

    var lastTabStop = focusableElements[focusableElements.length - 1];

    if (document.querySelector('body').classList.contains('show-pop-up-remember-pass') == false) {
        focusableElements[1].focus();
    } else {
        focusableElements[0].focus();
    }

    if (document.querySelector('body').classList.contains('show-pop-up-new-pass') == true) {
        focusableElements[0].focus();
    }

    modal.addEventListener('keydown', function (e) {
        if (e.keyCode === 9) {

            if (e.shiftKey) {

                if (document.activeElement === firstTabStop) {
                    e.preventDefault();

                    lastTabStop.focus();
                }

            } else {

                if (document.activeElement === lastTabStop) {
                    e.preventDefault();
                    firstTabStop.focus();
                }
            }
        }
    });
}




openPopUpErrorAccount()

function openPopUpErrorAccount() {
    // popUpErrorAccount
    scrollDisable();
    document.body.classList.add('show-pop-up-error-account');
    setVisible(popUpErrorAccount);
    tabIndex(popUpErrorAccount);
    window.location.hash = "#error-account";
}

function closePopUpErrorAccount() {
    scrollEnable();
    setHidden(popUpErrorAccount);
    if (window.location.hash == "#error-account") {
        remove_hash_from_url();
    }
    document.body.classList.remove('show-pop-up-error-account');
}

// openPopUpNewPass();
function openPopUpNewPass() {
    scrollDisable();
    document.body.classList.add('show-pop-up-new-pass');
    setVisible(popUpNewPassword);
    tabIndex(popUpNewPassword);
    window.location.hash = "#new_password";
}

function closePopUpNewPass() {
    scrollEnable();
    setHidden(popUpNewPassword);
    if (window.location.hash == "#new_password") {
        remove_hash_from_url();
    }
    document.body.classList.remove('show-pop-up-new-pass');
}

function openPopUpLoginCloseRegistration() {
    scrollDisable();
    document.body.classList.add('show-pop-up-enter');
    document.body.classList.remove('show-pop-up-registration');
    setVisible(popUpLogin);
    setHidden(popUpRegistration);
    tabIndex(popUpLogin);
}

function openPopUpRememberPass() {
    scrollDisable();
    document.body.classList.add('show-pop-up-remember-pass');
    document.body.classList.remove('show-pop-up-enter');
    setHidden(popUpLogin);
    setVisible(popUpRememberPass);
    tabIndex(popUpRememberPass);
}

// remember pass close
function closePopUpRememberPass() {
    scrollEnable();
    setHidden(popUpRememberPass);
    if (window.location.hash == "#section__pop-up__remember-pass") {
        remove_hash_from_url();
    }

    document.body.classList.remove('show-pop-up-remember-pass');
    if (document.querySelector('.input-sbm-true').classList.contains('sbm-form-remember-pass') == true) {
        document.querySelector('.input-sbm-true').classList.remove('sbm-form-remember-pass')
    }

    // if (document.querySelector('.form-sbm-true').classList.contains('form-sbm-true_show') == true) {
    //     document.querySelector('.form-sbm-true').classList.remove('form-sbm-true_show')
    // }
}

function openPopUpRegistrationCloseLogin() {
    scrollDisable();
    document.body.classList.add('show-pop-up-registration');
    document.body.classList.remove('show-pop-up-enter');
    setHidden(popUpLogin);
    setVisible(popUpRegistration);
    tabIndex(popUpRegistration);
}

function openPopUpRegistration() {
    scrollDisable();
    popUpRegistration.classList.add('active_login');
    document.body.classList.add('show-pop-up-registration');
    setVisible(popUpRegistration);
    tabIndex(popUpRegistration);
}

function closePopUpRegistration() {
    scrollEnable();
    setHidden(popUpRegistration);
    popUpRegistration.classList.remove('active_login');
    if (window.location.hash == "#section__pop-up__registration") {
        remove_hash_from_url();
    }

    document.body.classList.remove('show-pop-up-registration');
}
function remove_hash_from_url() {
    var uri = window.location.toString();
    if (uri.indexOf("#") > 0) {
        var clean_uri = uri.substring(0, uri.indexOf("#"));
        window.history.replaceState({}, document.title, clean_uri);
    }
}

function closePopUpLogin() {
    scrollEnable();
    setHidden(popUpLogin);
    if (window.location.hash == "#section__pop-up__login") {
        remove_hash_from_url();
    }
    document.body.classList.remove('show-pop-up-enter');
}

function openPopUpLogin() {
    scrollDisable();
    document.body.classList.add('show-pop-up-enter');
    setVisible(popUpLogin);
    tabIndex(popUpLogin);
}

function scrollDisable() {
    let x = window.scrollX;
    let y = window.scrollY;
    window.onscroll = function () { window.scrollTo(x, y); };
}

function scrollEnable() {
    window.onscroll = function () { };
}

function chooseName() {
    if (this.checked) {
        this.getAttribute('data-value');
        inputNicName.placeholder = `Ваш никнейм в ${this.getAttribute('data-value')}`;
        spanSetNicName.innerHTML = `${this.getAttribute('data-value')}`;
        if (this.value.replace(/ +/g, ' ').trim() == '') {
            // document.querySelector('.input-nic-error__message p').innerHTML = `Введите один из контактов Telegram или Skype`;
        } else if (this.value.length >= 0 && this.value.length < 3 && this.value.replace(/ +/g, ' ').trim() != '') {
            document.querySelector('.input-nic-error__message p').innerHTML = `Поле "${this.getAttribute('data-value-en')}" заполнено не верно`;
        }
    }
}

function setHidden(element) {
    element.style.opacity = '0';
    element.style.visibility = 'hidden';
    setTimeout(function () {
        element.style.display = `none`
    }, timerStart);
    element.style.transition = `all .5s ease -in `;
}

function setVisible(element) {
    element.style.display = `flex`;
    element.style.visibility = 'visible';
    setTimeout(function () {
        element.style.opacity = '1';
    }, timerStart);
    element.style.transition = `all .5s ease -in `;
}