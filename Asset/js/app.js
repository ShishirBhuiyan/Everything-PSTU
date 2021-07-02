
$(document).ready(function() {
    // Search Document
    $('.searchicon').click(function(){
        $(".search").toggleClass("open");
    }); 

    // Banner Slick Slider
    $('.content').slick({
        dots: false,
        infinite: true,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 7000,
        prevArrow:'.prev',
        nextArrow:'.next'
        
    });

    
    $(".nav-links.dropdown").click(function(){
        console.log(this);
        $(this.lastElementChild).slideToggle();
        //$('.mega').toggleClass('active');
     });

     console.log($(".nav-ul"));

});