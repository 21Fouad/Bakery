$(document).ready(function () {
    $('.load').fadeOut(3000, function (){
        $('body').css('overflow', 'auto')
    });
});


let headerHeight = $('#nav').outerHeight();
$(window).scroll(function () { 
    let windowScroll = $(window).scrollTop();

    if (windowScroll >= headerHeight) {
        $('.navbar').css({
            transition: 'all 2s',
            backgroundColor:'black'
        });
        $('.btn-up').fadeIn(2000);
    }
    else {
        $('.navbar').css({
            transition: 'all 2s',
            backgroundColor:'transparent'
        });
        $('.btn-up').fadeOut(1000);
    }
    
})
$('.btn-up').click(function () {
    $('body,html').animate({
        scrollTop:0
    },1000)
});
