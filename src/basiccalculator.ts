function calculate(s: string): number {
    const stack: number[] = [];
    let sign = 1; 
    let result = 0;
    let num = 0;
    let i = 0;

    while (i < s.length) {
        const char = s[i];

        if (char === ' ') {
            i++;
            continue;
        }

        if (char === '+') {
            sign = 1;
            i++;
        } else if (char === '-') {
            sign = -1;
            i++;
        } else if (char === '(') {
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
            i++;
        } else if (char === ')') {
            result = stack.pop()! * result + stack.pop()!;
            i++;
        } else if (/\d/.test(char)) {
            num = 0;
            while (i < s.length && /\d/.test(s[i])) {
                num = num * 10 + parseInt(s[i]);
                i++;
            }
            result += sign * num;
        }
    }

    return result;
}

console.log(calculate("1 + 1")); 
console.log(calculate(" 2-1 + 2 ")); 
console.log(calculate("(1+(4+5+2)-3)+(6+8)")); 

