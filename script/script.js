
/*slick*/
$('.main-slider').slick({
    dots: true,
    autoplay: false,
    pauseOnHover: true,
    arrows: true
});

/*menu-navbar*/
$(document).ready(function () {
    $(".navbar-toggler").click(function () {
        $(".menu-toggler").slideToggle();
    })
});


$(document).ready(function () {
    $(".icon-search-icon").click(function () {
        $(".user-place_form").slideToggle();
    })
});

/*добавить удалить клас при клике на меню*/
$(function(){
    $('.navbar-toggler').click(function(){
        $('.navbar-toggler').toggleClass('menu-active');
    });
});

$('.slick-prev, .slick-next').wrapAll('<div id="wrapper-slider"></div>'); //*add wrapper for all selected classes*//
$('#wrapper-slider').css({'max-width': '1248px', 'margin': '0 auto', 'position': 'relative'});//*add style for new id*//

/* Модальное Окно*/
var delay_popup = 5000;
setTimeout("document.getElementById('overlay').style.display='block'", delay_popup);