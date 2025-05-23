"use strict";
function largestNumber(nums) {
    const numsStr = nums.map(num => num.toString());
    numsStr.sort((a, b) => (b + a).localeCompare(a + b));
    if (numsStr[0] === '0') {
        return '0';
    }
    return numsStr.join('');
}
console.log(largestNumber([10, 2]));
console.log(largestNumber([3, 30, 34, 5, 9]));
