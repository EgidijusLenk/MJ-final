
$(document).ready(function(){
    if($(document).width()>=768) {
    $('.owl-carousel').owlCarousel({
        // animateOut: 'pulse',       // Pakeisti jei reikes
        // animateIn: 'pulse',
        loop:true,
        smartSpeed:800,
        URLhashListener:true,
        responsive:{
            0:{
                items:1}}
    });}
    else    {
        $('.owl-carousel').owlCarousel({
            // animateOut: 'flip',
            // animateIn: 'flip',
            loop:true,
            smartSpeed:800,
            URLhashListener:true,
            responsive:{
                0:{
                    items:1}}
        });}

});



