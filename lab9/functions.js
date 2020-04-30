/*jshint esversion: 6  */

(function() {
    "use strict";

    describe("reverseArray(array)", function() {
        context("when [1,2,3] entered", function() {

            it("the result is [3,2,1]", function() {
                assert.deepEqual(reverseArray([1,2,3]), [3,2,1]);
            });
        });
    });

    describe("reverseArrayInPlace(array)", function() {
        context("when var arr [1,2,3] is applied ", function() {
            let arr = [1,2,3];

            it("the var arr becomes [3,2,1]", function() {
                reverseArrayInPlace(arr);
                assert.deepEqual(arr, [3,2,1]);
            });
        });
    });

    describe("arrayToList(array)", function() {
        context("when [10, 20] is entered ", function() {
            it("the result is {value: 10, rest: {value: 20, rest: null}}", function() {
                assert.deepEqual(arrayToList([10, 20]), {value: 10, rest: {value: 20, rest: null}});
            });
        });
    });

    describe("listToArray(list)", function() {
        context("when {value: 10, rest: {value: 20, rest: null} is entered ", function() {
            it("the result is [10, 20]", function() {
                assert.deepEqual(listToArray({value: 10, rest: {value: 20, rest: null}}), [10, 20]);
            });
        });
    });

    describe("prepend(elem, list)", function() {
        context("when 22 and {value: 10, rest: {value: 20, rest: null}}} is entered ", function() {
            it("the result is {value: 22, rest: {value: 10, rest: {value: 20, rest: null}}}", function() {
                assert.deepEqual(prepend(22, {value: 10, rest: {value: 20, rest: null}}), {value: 22, rest: {value: 10, rest: {value: 20, rest: null}}});
            });
        });
    });

    describe("nth(list, position)", function() {
        context("when {value: 10, rest: {value: 20, rest: null}}} and 1 is entered ", function() {
            it("the result is 20", function() {
                assert.deepEqual(nth( {value: 10, rest: {value: 20, rest: null}}, 1), 20);
            });
        });
    });

    describe("deepEqual(obj1, obj2)", function() {
        context("when {here: {is: \"an\"}, object: 2} and {here: {is: \"an\"}, object: 2} is entered ", function() {
            it("the result is true", function() {
                assert.deepEqual(deepEqual( {here: {is: "an"}, object: 2}, {here: {is: "an"}, object: 2}), true);
            });
        });

        context("when {here: {is: \"an\"}, object: 2} and {here: 1, object: 2} is entered ", function() {
            it("the result is false", function() {
                assert.deepEqual(deepEqual( {here: {is: "an"}, object: 2}, {here: 1, object: 2}), false);
            });
        });
    });



    function reverseArray(array) {
        let origArray = [...array];
        let newArr = [];
        for(let elem in array) {
            let first = origArray.pop();
            newArr.push(first);
        }
        return newArr;
    }

    function reverseArrayInPlace(arr) {
        for (var i = 0; i <= (arr.length / 2); i++) {
            let el = arr[i];
            arr[i] = arr[arr.length - 1 - i];
            arr[arr.length - 1 - i] = el;
        }
    }


    function arrayToList(array) {
        let list = null;
        for(let i = 0; i < array.length; i++) {
            let next = list;
            list = {value: array[array.length - 1 - i], rest: next};
        }

        return list;
    }

    function prepend(elem, list) {

        return {value: elem, rest: list};
    }

    function nth(list, position) {
        let elem;
        for (let i = 0; i <= position; i++) {
            elem = list.value;
            list = list.rest;
        }
        return elem;
    }

    function listToArray(list) {
        let array = [];

        array.push(list.value);

        while (list.rest !== null) {
            array.push(list.rest.value);
            list = list.rest;
        }

        return array;
    }

    function deepEqual(obj1, obj2) {
        let properties = Object.keys(obj1);
        let properties2 = Object.keys(obj2);

        for(let i = 0; i < properties.length; i++) {

            if(typeof obj1[properties[i]] === 'object') {
                let result = deepEqual(obj1[properties[i]], obj2[properties2[i]]);
                if(!result){
                    return false;
                }
            } else if(obj1[properties[i]] !== obj2[properties2[i]]) {
                return false;
            }
        }

        return true;
    }


}());
