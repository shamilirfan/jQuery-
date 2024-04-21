$(document).ready(function () {
    // without toggle
    
    // $('.btn-1').on({
    //     click: function () {
    //         $('.one > p').hide('slow');
    //     }
    // });
    // $('.btn-2').on({
    //     click: function () {
    //         $('.one > p').show('slow');
    //     }
    // });

    // toggle
    $('.btn-1').on({
        click:function(){
            $('.one > p').toggle('slow');
        }
    });
});