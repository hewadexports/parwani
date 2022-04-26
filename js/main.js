// Toggle Navbar
$(document).ready(function () {
    $('.navbar-toggler').click(function () {
        $('.navbar-toggler').toggleClass('change');
    });

    $('.navbar-toggler').click(function () {
        $('.header').toggleClass('active-toggle');
    });
});

// Sticky Header
$(window).scroll(function () {
    if ($(this).scrollTop() > 550) {
        $('.header').addClass('sticky');
    } else {
        $('.header').removeClass('sticky');
    }
});
