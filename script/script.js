
/*slick*/

$('.main-slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    arrows: true
});


/*slick*/
$('.slider-brends').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    
    /*responsive slick*/
    responsive: [{
        breakpoint: 991,
        settings: {
            slidesToShow: 4
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 3
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 2
        }
    }]
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


/*masonry*/
var $grid = $('.grid').masonry({
    // options...
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
});