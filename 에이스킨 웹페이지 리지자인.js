// 탑바
function TopBar__init() {
    $('.top-bar .menu-box-1 > ul > li').mouseenter(function () {
        var height = $(this).find(' > ul').height();
        $('.top-bar .menu-box-1 > .bg').addClass('active');
        $('.top-bar .menu-box-1 > .bg').css('height', height);
    });

    $('.top-bar .menu-box-1 > ul > li').mouseleave(function () {
        $('.top-bar .menu-box-1 > .bg').removeClass('active');
        $('.top-bar .menu-box-1 > .bg').css('height', 0);
    });
}

$(function () {
    TopBar__init();
});

// 메인배너 슬라이더
function SliderBox1__init() {
    $('.slider-box-1 > .slick').slick({
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: ".slider-box-1 .arrows > .btn-arrow-left",
        nextArrow: ".slider-box-1 .arrows > .btn-arrow-right"
    });
    /*
  autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover:false,
    arrows:false,
    slidesToShow: 1,
    dots:true
  */
}

$(function () {
    SliderBox1__init();
});




function SliderBox2__init() {
    $('.slider-area-4 .slick').slick({
        arrows:true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 800,
        prevArrow: ".slider-box-2 .arrow .btn-arrow-left",
        nextArrow: ".slider-box-2 .arrow .btn-arrow-right"
    });
    /*
  autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover:false,
    arrows:false,
    slidesToShow: 1,
    dots:true
  */
}

$(function () {
    SliderBox2__init();
});