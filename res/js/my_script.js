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

document.addEventListener('DOMContentLoaded', function () {

    if (window.location.hash == "#section__pop-up__login") {
        openPopUpLogin();
        document.body.classList.add('show-pop-up-enter');
    }

    if (window.location.hash == "#section__pop-up__registration") {
        openPopUpRegistration();
        document.body.classList.add('show-pop-up-registration');
    }

    let allRadioMesenger = document.querySelectorAll('.choose-messanger');

    let nameMessenger = '';

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


    // close pop-up Login
    if (document.getElementById('close__pop-up__login') != null && document.getElementById('close__pop-up__login') != undefined) {
        document.getElementById('close__pop-up__login').onclick = closePopUpLogin;
    }

    // section login
    let sectionLogin;
    if (document.querySelector('.section__form__login') != null && document.querySelector('.section__form__login') != undefined) {
        sectionLogin = document.querySelector('.section__form__login');
    }

    document.onclick = function (e) {
        // close pop-up login when click other smt
        if (document.body.classList.contains('show-pop-up-enter') == true) {

            if (!sectionLogin.contains(e.target) && e.target.id != 'btn__open__login' && !mobileBtnLogin.contains(e.target) && !linkForOpenLogin.contains(e.target)) {
                closePopUpLogin();
            }
        }

        // close pop-up registration when click other smt
        if (document.body.classList.contains('show-pop-up-registration') == true) {
            if (openRegistrationMainBlock == undefined && openRegistrationMainBlock == null && openRegistrationIncreaseIncome == undefined && openRegistrationIncreaseIncome == null) {
                if (!sectionRegistration.contains(e.target) && e.target.id != 'btn__open__registration' && !linkForOpenRegistration.contains(e.target) && !mobileBtnRegistration.contains(e.target) && document.querySelector('body').classList.contains('show-pop-up-registration') == true) {
                    setHidden(popUpRegistration);
                    document.querySelector('body').classList.remove('show-pop-up-registration');
                    if (window.location.hash == "#section__pop-up__registration") {
                        remove_hash_from_url();
                    }
                }
            } else if (!sectionRegistration.contains(e.target) && e.target.id != 'btn__open__registration' && !linkForOpenRegistration.contains(e.target) && !mobileBtnRegistration.contains(e.target) && document.querySelector('body').classList.contains('show-pop-up-registration') == true && !openRegistrationMainBlock.contains(e.target) && !openRegistrationIncreaseIncome.contains(e.target)) {
                setHidden(popUpRegistration);
                document.querySelector('body').classList.remove('show-pop-up-registration');
                if (window.location.hash == "#section__pop-up__registration") {
                    remove_hash_from_url();
                }
            }
        }
    };

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
    if (window.innerWidth > 1024) {
        mobileBtnLogin.onclick = openPopUpLogin;
    }

    // open pop-up Registration
    mobileBtnRegistration.onclick = openPopUpRegistration;

    linkForOpenRegistration.onclick = openPopUpRegistrationCloseLogin;
    linkForOpenLogin.onclick = openPopUpLoginCloseRegistration;
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

    firstTabStop.focus();

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

function openPopUpLoginCloseRegistration() {
    setVisible(popUpLogin);
    setHidden(popUpRegistration);
    document.body.classList.add('show-pop-up-registration');
    tabIndex(popUpRegistration);
}

function openPopUpRegistrationCloseLogin() {
    setHidden(popUpLogin);
    setVisible(popUpRegistration);
    document.body.classList.add('show-pop-up-registration');
    tabIndex(popUpRegistration);
}

function openPopUpRegistration() {
    setVisible(popUpRegistration);
    popUpRegistration.classList.add('active_login');
    document.body.classList.add('show-pop-up-registration');
    tabIndex(popUpRegistration);
}

function closePopUpRegistration() {
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
    setHidden(popUpLogin);
    if (window.location.hash == "#section__pop-up__login") {
        remove_hash_from_url();
    }

    document.body.classList.remove('show-pop-up-enter');
}

function openPopUpLogin() {
    console.log('open');
    setVisible(popUpLogin);
    document.body.classList.add('show-pop-up-enter');
    tabIndex(popUpLogin)
}

function chooseName() {
    if (this.checked) {
        this.getAttribute('data-value');
        inputNicName.placeholder = `Ваш никнейм в ${this.getAttribute('data-value')}`;
        spanSetNicName.innerHTML = `${this.getAttribute('data-value')}`
    }
}

function setHidden(element) {
    element.style.opacity = '0';
    element.style.visibility = 'hidden';
    setTimeout(function () {
        element.style.display = `none`
    }, timerStart);
    element.style.transition = `all .5s ease-in`;
}

function setVisible(element) {
    element.style.display = `flex`;
    element.style.visibility = 'visible';
    setTimeout(function () {
        element.style.opacity = '1';
    }, timerStart);
    element.style.transition = `all .5s ease-in`;
}