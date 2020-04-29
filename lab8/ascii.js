/*jshint esversion: 6 */
window.onload = function () {
    'use strict';

    let currentAnimation;
    let interval;
    let time = 250;

    let startButton = document.getElementById("start");
    startButton.onclick = start;

    let stopButton = document.getElementById("stop");
    stopButton.onclick = stop;

    let textArea = document.getElementById('text-area');
    let animation = document.getElementById('animation');
    animation.onchange = changeAnimation;

    let fontsizeSelect = document.getElementById("fontsize");
    fontsizeSelect.onchange = changeSize;

    let turboCheck = document.getElementById("turbo");
    turboCheck.onchange = (function() {

        if (interval) {
            clearInterval(interval);
        }

        if (this.checked) {
            interval = setInterval(function() { displayNextFrame(currentAnimation); }, 50);
        } else {
            interval = setInterval(function() { displayNextFrame(currentAnimation); }, time);

        }

    });

    function start() {
        stopButton.disabled = false;
        startButton.disabled = true;
        animation.disabled = true;

        var animationArray = textArea.value.split("=====\n");

        currentAnimation = animationArray;

        interval = setInterval(function() { displayNextFrame(currentAnimation); }, time);

    }
    
    function displayNextFrame(animation) {
        var currentFrame = animation.shift();
        textArea.value = currentFrame;
        animation.push(currentFrame);
        currentAnimation = animation;
    }

    function stop() {
        startButton.disabled = false;
        animation.disabled = false;
        changeAnimation();
        clearInterval(interval);
        stopButton.disabled = true;
    }

    function changeAnimation() {
        textArea.value = ANIMATIONS[animation.value];
    }

    function changeSize() {
        var size = fontsizeSelect.value;
        textArea.style.fontSize = size;
    }

}