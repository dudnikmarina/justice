/*slick*/
$('.main-slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    arrows: true
});

$('.main-slider .slick-prev, .main-slider .slick-next').wrapAll('<div id="wrapper-slider"></div>'); //*add wrapper for all selected classes*//
$('#wrapper-slider').css({'max-width': '1248px', 'margin': '0 auto', 'position': 'relative'});//*add style for new id*//

/*slick*/
$('.slider-brends').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    arrows: true,

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

$(document).ready(function () {
    $(".card-hover_footer").click(function () {
        $("#overlay-product").show(200);
    })
});


/*счетчик кол.*/
var wrapper = document.querySelector('counter');
var countInput = document.getElementById('count');
var butM = document.getElementById('bminus');
var butP = document.getElementById('bplus');
var units = countInput.value.replace(/\d/g, '');
butP.onclick = function() {
    countInput.value = parseInt(countInput.value) + 1 + units;
};
butM.onclick = function() {
    if (parseInt(countInput.value) > 1) {
        countInput.value = parseInt(countInput.value) - 1 + units;
    }
};



$(function(){
    $('.filter').click(function(){
        $('.product-main_sidebar').addClass('product-main_close');
        $('.product-main_body').addClass('product-main_active');
        $('.card-product').addClass('card-product_active');
    });
});
$(function(){
    $('.breadcrumbs-filters').click(function(){
        $('.product-main_sidebar').removeClass('product-main_close', 'block');
        $('.product-main_body').removeClass('product-main_active');
        $('.card-product').removeClass('card-product_active');
    });
});
$(document).ready(function () {
    $(".breadcrumbs-filters").click(function () {
        $(".product-main_sidebar").show(200);
    })
});
$(document).ready(function () {
    $(".filter").click(function () {
        $(".product-main_sidebar").hide(200);
    })
});

/*добавить удалить клас при клике на меню*/
$(function(){
    $('.navbar-toggler').click(function(){
        $('.navbar-toggler').toggleClass('menu-active');
    });
});



/* Модальное Окно*/
var delay_popup = 5000;
setTimeout("document.getElementById('overlay').style.display='block'", delay_popup);

$('.slick-product').slick();


