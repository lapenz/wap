/*jshint  esversion:6, globalstrict:true */

$( document ).ready(function() {

    $('#start').click(function () {
        var numberCircles = $('#numberCircles').val();
        let divArray = [];
        for(let i = 0; i < numberCircles; i++) {
            divArray.push( $("<div>", {class: "circle"}));
        }
        $("#content").append(...divArray);

        var width = $('#width').val();
        $('.circle').css('width', width);
        $('.circle').css('height', width);

        var growthAmount = $('#growthAmount').val();
        var growthRate = $('#growthRate').val();

        setInterval(() => $('.circle').css('width', '+='+growthAmount), growthRate);
        setInterval(() => $('.circle').css('height', '+='+growthAmount), growthRate);

        $('.circle').click(function () {
            $(this).remove();
        })

        $('.circle').mouseenter(function () {
            $(this).css('opacity', '50%');
        })

        $('.circle').mouseleave(function () {
            $(this).css('opacity', '100%');
        })
    });



});