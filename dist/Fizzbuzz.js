"use strict";
function fizzbuzz(n) {
    const answer = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            answer.push("fizzbuzz");
        }
        else if (i % 3 === 0) {
            answer.push("fizz");
        }
        else if (i % 5 === 0) {
            answer.push("Buzz");
        }
        else {
            answer.push(i.toString());
        }
    }
    return answer;
}
console.log(fizzbuzz(3));
console.log(fizzbuzz(5));
console.log(fizzbuzz(15));
