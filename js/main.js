$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 3,
        responsive: {
            0: {
            items: 1,
            },
            650: {
            items: 2,
            },
            1000: {
            items: 3,
            },
        },
        nav: true,
        margin: 20,
        loop: true,
    });
});