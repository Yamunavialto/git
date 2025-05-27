"use strict";
function makeLargestSpecial(s) {
    const res = [];
    let count = 0;
    let start = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1')
            count++;
        else
            count--;
        if (count === 0) {
            const inner = makeLargestSpecial(s.substring(start + 1, i));
            res.push('1' + inner + '0');
            start = i + 1;
        }
    }
    res.sort((a, b) => b.localeCompare(a));
    return res.join('');
}
console.log(makeLargestSpecial("11011000"));
console.log(makeLargestSpecial("10"));
