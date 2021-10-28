function TopBar__init(){
    $('.top-bar .menu-box-1 > ul > li').mouseenter(function(){
        var height =  $(this).find(' > ul').height();
        $('.top-bar .menu-box-1 > .bg').addClass('active');
        $('.top-bar .menu-box-1 > .bg').css('height',height);
    });

    $('.top-bar .menu-box-1 > ul > li').mouseleave(function(){
        $('.top-bar .menu-box-1 > .bg').removeClass('active');
        $('.top-bar .menu-box-1 > .bg').css('height',0);
    });
}

TopBar__init();