$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        nav:true,
        autoplay:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                 //If window greater than 600px, then display 3 items
                items:3
            },
        }
    });
})


