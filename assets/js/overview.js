$(document).ready(function () {

    $(function () {
        $('.blue_btn')
            .on('mouseenter', function (e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({ top: relY, left: relX })
            })
            .on('mouseout', function (e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({ top: relY, left: relX })
            });
    });


    // chart sort
    $('.overviewchartbox__time li a').click(function (e) {
        e.preventDefault();
        $(this).parents('.overviewchartbox__time').find('a').removeClass('active');
        $(this).addClass('active');
    });
});