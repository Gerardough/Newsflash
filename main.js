// Owl Carousel js 
$(document).ready(function(){$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

    // carousel next and prev
    $('.owl-next span').text('Next');
    $('.owl-prev span').text('Previous');

});