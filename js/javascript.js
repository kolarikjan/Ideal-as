
$(document).ready(function () {
    
    Fancybox.bind("[data-fancybox]", {});

    $('.owl-homepage').owlCarousel({
        loop:true,
        nav:true,
        navText: ["<img src='img/arrow-banner-left.png' alt='arrow' class='partners-slider'><img src='img/arrow-banner-right.png' alt='arrow' class='partners-slider-hover'>","<img src='img/arrow-banner-left.png' alt='arrow' class='partners-slider'><img src='img/arrow-banner-right.png' alt='arrow' class='partners-slider-hover'>"],
        dots: false,
        margin:0,
        items:1,
    });

});