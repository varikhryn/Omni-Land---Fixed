$(document).ready(function () {

    $("#registration-nic-name").keypress(function (e) {


        $('.js-mask-phone').inputmask('+38 (099) 999 - 99 - 99', {
            jitMasking: 30,
            showMaskOnHover: false,
        });
    });
});