
$(document).ready(function () {
    
    Fancybox.bind("[data-fancybox]", {});

    $('.owl-homepage').owlCarousel({
        loop:false,
        rewind:true,
        nav:false,
        dots: false,
        margin:1,
        items:1,
    });

    $('.owl-news').owlCarousel({
        loop:true,
        nav:true,
        navText: ["<img src='img/arrow-slider-red.png' alt='arrow'>","<img src='img/arrow-slider-red.png' alt='arrow'>"],
        dots: true,
        margin:30,
        items:1,
        responsive: {
            768: {
                items: 2
            },
            1200: {
                items: 3
            },
        }
    });

});