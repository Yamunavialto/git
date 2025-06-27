"use strict";
class GoodIntegersCounter {
    constructor(minSum, maxSum) {
        this.MOD = 1e9 + 7;
        this.memo = new Map();
        this.minSum = minSum;
        this.maxSum = maxSum;
    }
    countGoodIntegers(num1, num2) {
        const lowerBound = this.subtractOne(num1);
        return (this.count(num2) - this.count(lowerBound) + this.MOD) % this.MOD;
    }
    count(num) {
        this.memo.clear();
        const digits = num.split('').map(Number);
        return this.dp(0, 0, true, true, digits);
    }
    dp(pos, sum, tight, leadingZero, digits) {
        if (sum > this.maxSum)
            return 0;
        if (pos === digits.length)
            return sum >= this.minSum ? 1 : 0;
        const key = `${pos},${sum},${tight},${leadingZero}`;
        if (!tight && !leadingZero && this.memo.has(key)) {
            return this.memo.get(key);
        }
        const limit = tight ? digits[pos] : 9;
        let res = 0;
        for (let d = 0; d <= limit; d++) {
            const newTight = tight && d === limit;
            const newLeadingZero = leadingZero && d === 0;
            res = (res + this.dp(pos + 1, sum + d, newTight, newLeadingZero, digits)) % this.MOD;
        }
        if (!tight && !leadingZero) {
            this.memo.set(key, res);
        }
        return res;
    }
    subtractOne(num) {
        let arr = num.split('').map(Number);
        let i = arr.length - 1;
        while (i >= 0) {
            if (arr[i] > 0) {
                arr[i]--;
                break;
            }
            else {
                arr[i] = 9;
                i--;
            }
        }
        while (arr.length > 1 && arr[0] === 0)
            arr.shift();
        return arr.join('');
    }
}
const counter = new GoodIntegersCounter(1, 8);
console.log(counter.countGoodIntegers("1", "12"));
const counter2 = new GoodIntegersCounter(1, 5);
console.log(counter2.countGoodIntegers("1", "5"));
