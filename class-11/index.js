$(document).ready(function () {
    // without toggle 
    // $('.btn-1').on({
    //     click: function () {
    //         $('.one').fadeOut('slow');
    //     }
    // });

    // with fadetoggle
    $('.btn-1').on({
        click: function () {
            $('.one').fadeToggle('slow');
        }
    });
});