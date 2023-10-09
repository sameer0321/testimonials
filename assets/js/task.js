$('.Slider1').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 5,
    infinite: true,
    autoplay: false,
    speed: 300,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 550,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }
    ]
});

$('.Slider2').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.Slider1',
    autoplay: true,
    responsive: [
        {
            breakpoint: 550,
            settings: {
                arrows: false,
                dots: false
            }
        }
    ]
});

