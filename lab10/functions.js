/*jshint esversion: 6  */

(function(ASSERT) {
    "use strict";

    describe("String.prototype.filterBannedWord(bannedWord)", function() {
        context("when 'Rat fast'.filterBannedWord('Rat') is called", function() {

            it("the result is 'fast'", function() {
                ASSERT.equal('Rat fast'.filterBannedWord('Rat'), 'fast');
            });
        });
    });

    describe("Array.prototype.bubbleSort()", function() {
        context("when [4,5,3,-5].bubbleSort() is called", function() {

            it("the result is [-5, 3, 4, 5]", function() {
                ASSERT.deepEqual([4,5,3,-5].bubbleSort(), [-5, 3, 4, 5]);
            });
        });
    });

    describe("Teacher.prototype.Person", function() {
        context("when " +
            "var me = new Teacher(); " +
            "me.initialize(\"John\", 25) " +
            "and me.teach(\"Inheritance\") is called", function() {
            it("the result is 'John is now teaching Inheritance'", function() {
                var me = new Teacher();

                me.initialize("John", 25);
                ASSERT.equal(me.teach("Inheritance"), "John is now teaching Inheritance");
            });
        });
    });


    String.prototype.filterBannedWord = function (bannedWord) {
        let arrayWords = this.split(" ");
        let arrayWordsFiltered = arrayWords.filter((word) => word !== bannedWord);
        return arrayWordsFiltered.join(" ");
    };

    Array.prototype.bubbleSort = function () {
        var swapp;
        var n = this.length-1;
        var x=this;
        do {
            swapp = false;
            for (var i=0; i < n; i++)
            {
                if (x[i] > x[i+1])
                {
                    var temp = x[i];
                    x[i] = x[i+1];
                    x[i+1] = temp;
                    swapp = true;
                }
            }
            n--;
        } while (swapp);
        return x;
    };

    var Person = function() {};

    Person.prototype.initialize = function(name, age)
    {
        this.name = name;
        this.age = age;
    };

    Person.prototype.describe = function()
    {
        return this.name + ", " + this.age + " years old.";
    };

    var Teacher = function () {};
    Teacher.prototype = new Person();

    Teacher.prototype.teach = function(subject) {
        return this.name + " is now teaching " +subject;
    };


}(chai.assert));
