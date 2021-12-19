$(document).ready(function () {
    var i = 0;
    var slogan = 'Подарим волшебство для Ваших детей!';
    var speed = 50;

    function typeWriter() {
        if (i < slogan.length) {
            document.getElementById("slogan").innerHTML += slogan.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    };

    typeWriter();
});

$('.howto').click(function () { 
    $('.logics_block').addClass('logic_active').removeClass('d-none');
});