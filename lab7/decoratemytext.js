/*jshint esversion: 6 */


function hello() {
    alert("Hello, world!");
    var text1 = document.getElementById("text1");

    setInterval(function () {
        var currentSize = window.getComputedStyle(text1, null).getPropertyValue('font-size');
        var newSize = parseInt(currentSize) + 2;
        text1.style.fontSize = newSize + "pt";
    }, 500);

}

function changeStyle(checkBling) {
    alert("Changing styles");
    var text1 = document.getElementById("text1");

    if (checkBling.checked) {
        text1.style.fontWeight = 'bold';
        text1.style.color = 'green';
        text1.style.textDecoration = 'underline';
        document.body.style.backgroundImage = 'url("hundred-dollar-bill.jpg")';
        document.body.style.backgroundRepeat = 'repeat';
    } else {
        text1.style.fontWeight = 'normal';
        text1.style.color = 'black';
        text1.style.textDecoration = 'none';
        document.body.style.backgroundImage = null;
    }

}
