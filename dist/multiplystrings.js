"use strict";
function multiply(num1, num2) {
    const len1 = num1.length;
    const len2 = num2.length;
    const result = Array(len1 + len2).fill(0);
    for (let i = len1 - 1; i >= 0; i--) {
        for (let j = len2 - 1; j >= 0; j--) {
            const mu1 = (num1.charCodeAt(i) - 48) * (num2.charCodeAt(j) - 48);
            const sum = mu1 + result[i + j + 1];
            result[i + j + 1] = sum % 10;
            result[i + j] += Math.floor(sum / 10);
        }
    }
    let resultstr = result.join('').replace(/^0+/, '');
    return resultstr.length === 0 ? '0' : resultstr;
}
console.log(multiply("2", "3"));
console.log(multiply("123", "456"));
console.log(multiply("0", "12345"));
console.log(multiply("999", "999"));
