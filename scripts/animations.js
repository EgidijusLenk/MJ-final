
// $(document).ready(function() {
//     if($(document).width() <=768) {$('.leftSideImagesUlist').addClass("owl-carousel")};
//     else {$('.leftSideImagesUlist').addClass("mobile_carousel")};
//   });

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        animateOut: 'fadeOutLeft',
        animateIn: 'fadeInRight',
        loop:true,
        smartSpeed:800,
        URLhashListener:true,
        responsive:{
            0:{
                items:1}}
    })
});



  $(document).ready(function(){
    $('.mobile_carousel').owlCarousel({
        animateOut: 'fadeOutUp',
        animateIn: 'fadeInDown',
        loop:true,
        smartSpeed:20,
        URLhashListener:true,
        responsive:{
            0:{
                items:1}}
    })
});