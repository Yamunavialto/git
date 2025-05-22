"use strict";
function solveequation(equation) {
    function parseexpression(expr) {
        let coeff = 0;
        let constsum = 0;
        let i = 0;
        let sign = 1;
        while (i < expr.length) {
            if (expr[i] === '+') {
                sign = 1;
                i++;
            }
            else if (expr[i] === '-') {
                sign = -1;
                i++;
            }
            let num = 0;
            let hasnum = false;
            while (i < expr.length && /\d/.test(expr[i])) {
                num = num * 10 + Number(expr[i]);
                i++;
                hasnum = true;
            }
            if (i < expr.length && expr[i] === 'x') {
                coeff += sign * (hasnum ? num : 1);
                i++;
            }
            else {
                constsum += sign * num;
            }
        }
        return [coeff, constsum];
    }
    const [left, right] = equation.split('=');
    const [leftcoeff, leftconst] = parseexpression(left);
    const [rightcoeff, rightconst] = parseexpression(right);
    const totalcoeff = leftcoeff - rightcoeff;
    const totalconst = rightconst - leftconst;
    if (totalcoeff === 0) {
        return totalconst === 0 ? "Infinite solutions" : "No solution";
    }
    const x = totalconst / totalcoeff;
    return `x=${x}`;
}
console.log(solveequation("x+5-3+x=6+x-2"));
console.log(solveequation("x=x"));
console.log(solveequation("2x=x"));
