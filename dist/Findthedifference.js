"use strict";
function findTheDifference(s, t) {
    let charCodeSumS = 0;
    let charCodeSumT = 0;
    for (let char of s) {
        charCodeSumS += char.charCodeAt(0);
    }
    for (let char of t) {
        charCodeSumT += char.charCodeAt(0);
    }
    return String.fromCharCode(charCodeSumT - charCodeSumS);
}
console.log(findTheDifference("abcd", "abcde"));
console.log(findTheDifference("", "y"));
