/*jshint esversion: 6 */
window.onload = function () {
    const myFunctionTest = (func, result) => {
        if (func === result) {
            return "TEST SUCCEDED";
        }
        return "TEST FAILED";
    };

    function sum(nums) {
        if (nums == null) {
            return 0;
        }
        return nums.reduce(function (a, b) {
            return a + b;
        }, 0);
    }

    console.log("Expected output of sum([1,2,3,4]) is 10 " + myFunctionTest(sum([1, 2, 3, 4]), 10));

    function multiply(nums) {
        if (nums == null) {
            return 0;
        }
        return nums.reduce(function (a, b) {
            return a * b;

        });
    }

    console.log("Expected output of multiply([1,2,3,4]) is 24 " + myFunctionTest(multiply([1, 2, 3, 4]), 24));

    function reverse(str) {
        return str.split("").reduce((rev, char)=> char + rev, '');
    }

    console.log("Expected output of reverse(\"lucas\") is sacul " + myFunctionTest(reverse("lucas"), "sacul"));

    function filterLongWords(words, i) {
        return words.filter((a) => a.length > i);
    }

    console.log("Expected output of filterLongWords([\"lucas\", \"ball\", \"do\"], 2) is [\"lucas\", \"ball\"] " + myFunctionTest(JSON.stringify(filterLongWords(["lucas", "ball", "do"], 2)), JSON.stringify(["lucas", "ball"])));

};