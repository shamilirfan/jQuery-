// $(document).ready(function () {
//     $('.btn-1').click(function () { 
//         $('[href]').remove();
//         // $('p[class]').remove();
//         // $('p[class="p-1"]').remove();
//         // $('[class="p-1"]').remove();
//     });
// });


$(document).ready(function () {
    $('.btn-1').click(function () { 
        $('p[class!="p-1"]').remove();
    });
});