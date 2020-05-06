/*jshint  esversion:6, globalstrict:true */

$( document ).ready(function() {

    $('#end').mouseenter(function () {
        if($('.boundary').hasClass('youlose')){
            $('#status').text("You lost!");
        } else {
            $('#status').text("You win!");
        }
        $('#maze').unbind('mouseleave');
        $('.boundary').unbind('mouseenter');
    });

    $("#start").click(function () {
        $('.boundary').removeClass('youlose');

        $('.boundary').mouseenter(function () {
            $(this).addClass('youlose');

        });

        $('#maze').mouseleave(function () {
            $('#status').text("You lost!");
            $('.boundary').addClass('youlose');
        });
    });


});