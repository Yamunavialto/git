function repeatedSubstringPattern(s: string): boolean {
    const n = s.length;
    for (let len = 1; len <= n / 2; len++) {
        if (n % len === 0) {
            const substr = s.slice(0, len);
            if (substr.repeat(n / len) === s) {
                return true;
            }
        }
    }
    return false;
}

console.log(repeatedSubstringPattern("abab"));
console.log(repeatedSubstringPattern("aba"));
console.log(repeatedSubstringPattern("abcabcabcabc"));