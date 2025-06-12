"use strict";
function decodeString(s) {
    const countStack = [];
    const stringStack = [];
    let currentString = '';
    let currentNum = 0;
    for (const char of s) {
        if (!isNaN(parseInt(char))) {
            currentNum = currentNum * 10 + parseInt(char);
        }
        else if (char === '[') {
            countStack.push(currentNum);
            stringStack.push(currentString);
            currentNum = 0;
            currentString = '';
        }
        else if (char === ']') {
            const repeatTimes = countStack.pop();
            const prevString = stringStack.pop();
            currentString = prevString + currentString.repeat(repeatTimes);
        }
        else {
            currentString += char;
        }
    }
    return currentString;
}
// Test cases
console.log(decodeString("3[a]2[bc]"));
console.log(decodeString("3[a2[c]]"));
console.log(decodeString("2[abc]3[cd]ef"));
