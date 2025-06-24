"use strict";
class wordfilter {
    constructor(words) {
        this.map = new Map();
        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            const len = word.length;
            for (let preflen = 1; preflen <= len; preflen++) {
                const prefix = word.substring(0, preflen);
                for (let suffstart = 0; suffstart < len; suffstart++) {
                    const suffix = word.substring(suffstart);
                    const key = `${prefix}#${suffix}`;
                    this.map.set(key, i);
                }
            }
        }
    }
    f(pref, suff) {
        const key = `${pref}#${suff}`;
        return this.map.has(key) ? this.map.get(key) : -1;
    }
}
const wordFilter = new wordfilter(["apple"]);
console.log(wordFilter.f("a", "e"));
console.log(wordFilter.f("p", "l"));
console.log(wordFilter.f("p", "p"));
