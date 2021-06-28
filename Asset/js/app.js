
$(document).ready(function() {
    // Search Document
    $('.searchicon').click(function(){
        $(".search").toggleClass("open");
    }); 

    // Banner Slick Slider
    $('.content').slick({
        dots: true,
        infinite: true,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 7000,
        prevArrow:'.prev',
        nextArrow:'.next'
        
    });

});