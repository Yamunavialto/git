"use strict";
function is_match_rec(t, p, n, m) {
    if (m === 0) {
        return n === 0;
    }
    if (n === 0) {
        return (m >= 2 && p[m - 1] === '*') && is_match_rec(t, p, n, m - 2);
    }
    if (t[n - 1] === p[m - 1] || p[m - 1] === '.') {
        return is_match_rec(t, p, n - 1, m - 1);
    }
    if (p[m - 1] === '*' && m > 1) {
        const zero = is_match_rec(t, p, n, m - 2);
        const one_or_more = (p[m - 2] === t[n - 1] || p[m - 2] === '.') && is_match_rec(t, p, n - 1, m);
        return zero || one_or_more;
    }
    return false;
}
function is_match(t, p) {
    return is_match_rec(t, p, t.length, p.length);
}
console.log(is_match('aab', 'a.*'));
console.log(is_match('aa', 'a'));
console.log(is_match('aa', 'a*'));
console.log(is_match('ab', '.*'));
console.log(is_match('mississippi', 'mis*is*p*.'));
