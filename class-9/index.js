$(document).ready(function () {
    // single event

    // $('.btn-1').on('click', function () {
    //     alert('hello click');
    // });

    // multiple event
    $('.btn-1').on({
        click: function () {
            alert('Hi click with on method!');
        },
        mouseup: function () {
            alert('Hi mouseup click with on method!');
        }
    });

});



$(document).ready(function () {
    $('input').on({
        focus: function () {
            $(this).val('focused');
        },
        blur:function(){
            $(this).val('blur');
        }
    });
});