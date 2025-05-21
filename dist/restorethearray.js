"use strict";
function numberOfArrays(s, k) {
    const MOD = 1e9 + 7;
    const n = s.length;
    const dp = new Array(n + 1).fill(0);
    dp[n] = 1;
    const maxDigits = k.toString().length;
    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === '0')
            continue;
        let num = 0;
        for (let j = i; j < n && j - i < maxDigits; j++) {
            num = num * 10 + Number(s[j]);
            if (num > k)
                break;
            dp[i] = (dp[i] + dp[j + 1]) % MOD;
        }
    }
    return dp[0];
}
console.log(numberOfArrays("1000", 10000));
console.log(numberOfArrays("1000", 10));
console.log(numberOfArrays("1317", 2000));
