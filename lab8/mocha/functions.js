/*jshint esversion: 6  */

(function() {
    "use strict";

    describe("max(a, b)", function() {
        context("when 2 and 3 entered", function() {

            it("the max is 3", function() {
                assert.equal(max(2, 3), 3);
            });
        });
    });

    describe("maxOfThree(a, b, c)", function() {
        context("when 2, 4 and 3 entered", function() {

            it("the max is 4", function() {
                assert.equal(maxOfThree(2, 4, 3), 4);
            });
        });
    });

    describe("isVowel(a)", function() {
        context("when 'a' entered", function() {

            it("the result is true", function() {
                assert.equal(isVowel('a'), true);
            });

        });

        context("when 'b' entered", function() {

            it("the result is false", function() {
                assert.equal(isVowel('b'), false);
            });

        });
    });

    describe("sum(a[])", function() {
        context("when [2, 4, 3] entered", function() {

            it("the result is 9", function() {
                assert.equal(sum([2, 4, 3]), 9);
            });
        });
    });

    describe("multiply(a[])", function() {
        context("when [2, 4, 3] entered", function() {

            it("the result is 24", function() {
                assert.equal(multiply([2, 4, 3]), 24);
            });
        });
    });

    describe("reverse(a)", function() {
        context("when 'lucas' entered", function() {

            it("the result is 'sacul'", function() {
                assert.equal(reverse('lucas'), 'sacul');
            });
        });
    });

    describe("findLongestWord(a[])", function() {
        context("when ['lucas', 'rat', 'brain', 'papaia'] entered", function() {

            it("the result is 6", function() {
                assert.equal(findLongestWord(['lucas', 'rat', 'brain', 'papaia']), 6);
            });
        });
    });

    describe("filterLongWords(a[], 5)", function() {
        context("when ['lucas', 'rat', 'brain', 'papaia'] entered", function() {

            it("the result is ['papaia']", function() {
                assert.deepEqual(filterLongWords(['lucas', 'rat', 'brain', 'papaia'], 5), ['papaia']);
            });
        });
    });

    describe("multiplyElements(a[])", function() {
        context("when [1,2,3] entered", function() {

            it("the result is [10,20,30]", function() {
                assert.deepEqual(multiplyElements([1,2,3]), [10,20,30]);
            });
        });
    });

    describe("elementsEqual3(a[])", function() {
        context("when [1,2,3] entered", function() {

            it("the result is [3]", function() {
                assert.deepEqual(elementsEqual3([1,2,3]), [3]);
            });
        });
    });

    describe("elementsProduct(a[])", function() {
        context("when [1,2,3] entered", function() {

            it("the result is 6", function() {
                assert.deepEqual(elementsProduct([1,2,3]), 6);
            });
        });
    });

    describe("map(a[], func)", function() {
        context("when [1,2,3] and (a) => a * 2 entered", function() {

            it("the result is [2, 4, 6]", function() {
                assert.deepEqual(map([1,2,3], (a) => a * 2), [2, 4, 6]);
            });
        });

        context("when ['lucas', 'bar'] and (a) => a.toUpperCase()", function() {

            it("the result is ['LUCAS', 'BAR']", function() {
                assert.deepEqual(map(['lucas', 'bar'], (a) => a.toUpperCase()), ['LUCAS', 'BAR']);
            });
        });


    });

    describe("filter(a[], func)", function() {
        context("when [1,2,3] and (a) => a > 2 entered", function() {

            it("the result is [3]", function() {
                assert.deepEqual(filter([1,2,3], (a) => a > 2), [3]);
            });
        });

        context("when ['lucas', 'bar'] and (a) => a.length > 3", function() {

            it("the result is ['lucas']", function() {
                assert.deepEqual(filter(['lucas', 'bar'], (a) => a.length > 3), ['lucas']);
            });
        });


    });


    function max(p1, p2) {
        if(p1 > p2)
            return p1;
        else
            return p2;
    }

    function maxOfThree(p1, p2, p3) {
        var max;
        if(p1 > p2) {
            max = p1;
        } else {
            max = p2;
        }

        if(max > p3){
            return max;
        } else {
            return p3;
        }

    }

    function isVowel(letter) {
        if (letter.length == 1) {
            return /[aeiou]/.test(letter);
        }
    }

    function sum(nums) {
        if (nums == null) {
            return 0;
        }
        return nums.reduce(function (a, b) {
            return  a + b;
        }, 0);
    }

    function multiply(nums) {
        if (nums == null){
            return 0;
        }
        return nums.reduce(function (a, b) {
            return a * b;

        })
    }

    function reverse(str) {
        return str.split("").reduce((rev, char)=> char + rev, '');
    }

    function findLongestWord(words) {
        var longestWord = 0;
        for(var i = 0; i < words.length; i++){
            if(words[i].length > longestWord){
                longestWord = words[i].length;
            }
        }
        return longestWord;
    }

    function filterLongWords(words, i) {
        return words.filter((a) => a.length > i);
    }

    function multiplyElements(nums) {
        return nums.map(a => a * 10);
    }

    function elementsEqual3(nums) {
        return nums.filter(a => a == 3);
    }

    function elementsProduct(nums) {
        return nums.reduce((a, b) => a * b);
    }
    
    function map(array, func) {
        var newArr = [];
        for(let elem of array) {
            newArr.push(func(elem));
        }
        return newArr;
    }


    function filter(array, func) {
        var newArr = [];
        for(let elem of array) {
            if(func(elem))
                newArr.push(elem);
        }
        return newArr;
    }



}());
