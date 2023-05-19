   //mixit up(portfolio section)
   var mixer = mixitup('.items-show');

   
  $('.active').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})