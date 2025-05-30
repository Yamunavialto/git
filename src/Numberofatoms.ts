function countOfAtoms(formula: string): string {
    const stack: Map<string, number>[] = [];
    let i = 0;

    const n = formula.length;

    const parseAtom = (): string => {
        let atom = formula[i++];
        while (i < n && formula[i] >= 'a' && formula[i] <= 'z') {
            atom += formula[i++];
        }
        return atom;
    };

    const parseNumber = (): number => {
        if (i >= n || isNaN(Number(formula[i]))) return 1;
        let num = 0;
        while (i < n && !isNaN(Number(formula[i]))) {
            num = num * 10 + Number(formula[i++]);
        }
        return num;
    };

    stack.push(new Map());

    while (i < n) {
        const ch = formula[i];

        if (ch === '(') {
            i++;
            stack.push(new Map());
        } else if (ch === ')') {
            i++;
            const multiplier = parseNumber();
            const poppedMap = stack.pop()!;
            const topMap = stack[stack.length - 1];

            for (const [atom, count] of poppedMap.entries()) {
                topMap.set(atom, (topMap.get(atom) || 0) + count * multiplier);
            }
        } else if (ch >= 'A' && ch <= 'Z') {
            const atom = parseAtom();
            const count = parseNumber();
            const topMap = stack[stack.length - 1];
            topMap.set(atom, (topMap.get(atom) || 0) + count);
        }
    }

    const finalMap = stack.pop()!;
    const sortedAtoms = Array.from(finalMap.keys()).sort();

    let result = '';
    for (const atom of sortedAtoms) {
        const count = finalMap.get(atom)!;
        result += atom + (count > 1 ? count.toString() : '');
    }

    return result;
}

console.log(countOfAtoms("H2O"));           // "H2O"
console.log(countOfAtoms("Mg(OH)2"));       // "H2MgO2"
console.log(countOfAtoms("K4(ON(SO3)2)2")); // "K4N2O14S4"
