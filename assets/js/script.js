const menu = document.querySelector(".menubar");

menu.addEventListener("click", function () {
    let navbar = document.querySelector(".navbar-items");
    navbar.classList.toggle("left-0");
})

$('.slick-slider1').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});
$('.slick-slider2').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 1000,
    rtl: true,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});