$(function(){

    $('.menu-btn').click(function(){
        $(this).toggleClass('active');
        $('.menu').slideToggle();
    })

    $('.slider').slick({
        slidesToShow: 1,
        prevArrow: false,
        nextArrow: false,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '5vw',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '10vw'

                    
                }
            }
        ]

      });


});