function myFunctionTest(func, result) {
    if(func == result) {
        return "TEST SUCCEDED";
    }
    return "TEST FAILED";
}
function max(p1, p2) {
    if(p1 > p2)
        return p1;
    else
        return p2;
}
console.log("Expected output of max(2,7) is 7 " + myFunctionTest(max(2,7), 7));

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
console.log("Expected output of maxOfThree(2,7,9) is 9 " + myFunctionTest(maxOfThree(2,7,9), 9));

function isVowel(letter) {
    if (letter.length == 1) {
        return /[aeiou]/.test(letter);
    }
}
console.log("Expected output of isVowel(a) is true " + myFunctionTest(isVowel("a"), true));
console.log("Expected output of isVowel(b) is false " + myFunctionTest(isVowel("b"), false));

function sum(nums) {
    if (nums == null) {
        return 0;
    }
    return nums.reduce(function (a, b) {
        return  a + b;
    }, 0);
}
console.log("Expected output of sum([1,2,3,4]) is 10 " + myFunctionTest(sum([1,2,3,4]), 10));

function multiply(nums) {
    if (nums == null){
        return 0;
    }
    return nums.reduce(function (a, b) {
        return a * b;

    })
}
console.log("Expected output of multiply([1,2,3,4]) is 24 " + myFunctionTest(multiply([1,2,3,4]), 24));

function reverse(str) {
    var splitString = str.split("");

    var reverseArray = splitString.reverse();

    var joinArray = reverseArray.join("");

    return joinArray;
}
console.log("Expected output of reverse(\"lucas\") is sacul " + myFunctionTest(reverse("lucas"), "sacul"));

function findLongestWord(words) {
    var longestWord = 0;
    for(var i = 0; i < words.length; i++){
        if(words[i].length > longestWord){
            longestWord = words[i].length;
        }
    }
    return longestWord;
}
console.log("Expected output of findLongestWord([lucas, giant, paul, sweet, pringles] is 8 " + myFunctionTest(findLongestWord(['lucas', 'giant', 'paul', 'sweet', 'pringles']), 8));

function filterLongWords(words, i) {
    return words.filter((a) => a.length > i);
}
console.log("Expected output of filterLongWords([\"lucas\", \"ball\", \"do\"], 2) is [\"lucas\", \"ball\"] " + myFunctionTest(JSON.stringify(filterLongWords(["lucas", "ball", "do"], 2)), JSON.stringify( ["lucas", "ball"])));

function multiplyElements(nums) {
    return nums.map(a => a * 10);
}
console.log("Expected output of multiplyElements([1,2,3,4]) is [10,20,30,40] " + myFunctionTest(JSON.stringify(multiplyElements([1,2,3,4])), JSON.stringify([10,20,30,40])));

function elementsEqual3(nums) {
    return nums.filter(a => a == 3);
}
console.log("Expected output of elementsEqual3([1,2,3,4,3]) is [3,3] " + myFunctionTest(JSON.stringify(elementsEqual3([1,2,3,4,3])), JSON.stringify([3,3])));

function elementsProduct(nums) {
    return nums.reduce((a, b) => a * b);
}
console.log("Expected output of elementsProduct([1,2,3,4,3]) is 72 " + myFunctionTest(elementsProduct([1,2,3,4,3]), 72));
