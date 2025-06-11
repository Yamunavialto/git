"use strict";
class similarstringgroups {
    constructor() {
        this.parent = [];
    }
    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }
    union(x, y) {
        const rootx = this.find(x);
        const rooty = this.find(y);
        if (rootx !== rooty) {
            this.parent[rootx] = rooty;
        }
    }
    isSimilar(a, b) {
        if (a === b)
            return true;
        let diff = [];
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                diff.push(i);
                if (diff.length > 2)
                    return false;
            }
        }
        return (diff.length === 2 &&
            a[diff[0]] === b[diff[1]] &&
            a[diff[1]] === b[diff[0]]);
    }
    numsimilargroups(strs) {
        const n = strs.length;
        this.parent = Array.from({ length: n }, (_, i) => i);
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                if (this.isSimilar(strs[i], strs[j])) {
                    this.union(i, j);
                }
            }
        }
        const uniqueParents = new Set();
        for (let i = 0; i < n; i++) {
            uniqueParents.add(this.find(i));
        }
        return uniqueParents.size;
    }
}
const solution = new similarstringgroups();
console.log(solution.numsimilargroups(["tars", "rats", "arts", "star"]));
console.log(solution.numsimilargroups(["omv", "ovm"]));
