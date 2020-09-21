$(document).ready(function () {
    //cd popup
        $('.card__link').on('click', function (event) {
            event.preventDefault();
            $('.cd-popup').addClass('is-visible');
        });
    })