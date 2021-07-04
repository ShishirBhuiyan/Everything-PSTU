
$(document).ready(function() {

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
        console.log(this.children[1]);
        $(this.children[1]).toggleClass('active');
        $(this.lastElementChild).slideToggle();
        //$('.mega').toggleClass('active');
     });

     $('.toggles').click(function(){
        $('.navigation').slideToggle();
        //$('.mega').toggleClass('active');
        $(".toggles .line").toggleClass("active");
     });


});