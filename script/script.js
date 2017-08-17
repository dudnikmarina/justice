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

/* slick with counter*/
var $gallery = $('.slick-product');
var slideCount = null;
$( document ).ready(function() {
    $gallery.slick({
        infinite: true,
        arrows: true,
        fade: true
    });
});

$gallery.on('init', function(event, slick){
    slideCount = slick.slideCount;
    setSlideCount();
    setCurrentSlideNumber(slick.currentSlide);
});

$gallery.on('beforeChange', function(event, slick, currentSlide, nextSlide){
    setCurrentSlideNumber(nextSlide);
});

function setSlideCount() {
    var $el = $('.slide-count-wrap').find('.total');
    $el.text(slideCount);
}

function setCurrentSlideNumber(currentSlide) {
    var $el = $('.slide-count-wrap').find('.current');
    $el.text(currentSlide + 1);
}


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


    $(".card-hover_footer").click(function () {
        $("#overlay-product").show();
        $('.slick-product').trigger('resize');
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
        $('.breadcrumbs-filters').addClass('breadcrumbs-filters_active');
        $('.filter').addClass('filter_close');
    });
});
$(function(){
    $('.breadcrumbs-filters').click(function(){
        $('.product-main_sidebar').removeClass('product-main_close', 'block');
        $('.product-main_body').removeClass('product-main_active');
        $('.card-product').removeClass('card-product_active');
        $('.breadcrumbs-filters').removeClass('breadcrumbs-filters_active');
        $('.filter').removeClass('filter_close');
    });
});

$(".breadcrumbs-filters").click(function () {
    $(".product-main_sidebar").show(200);
});


$(".filter").click(function () {
    $(".product-main_sidebar").hide(200);
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



$(document).ready(function() {
    $("#menu li span").click(function() { $(this).next().slideToggle("normal"); });
});


