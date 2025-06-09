function RemoveInvalidParentheses(s:string):string[]{
    const result :Set<string>=new Set();
    const visited :Set<string>=new Set();
    const queue:string[]=[];

        queue.push(s);
        visited.add(s);
        let found = false;

        const isValid=(str:string):boolean=>{
            let count =0;
            for(const char of str){
                if(char ==='('){
                    count++;

                } else if(char ===')'){
                    count--;
                    if(count<0)return false;
                }
            }
            return count === 0;
        };

        while (queue.length>0){
            const current = queue.shift()!;
        if (isValid(current)) {
            result.add(current);
                    found = true;
                }
                if (found) continue;
                for (let i = 0; i < current.length; i++) {
                      const char = current[i];
                      if (char !== '(' && char !== '(') continue;

                      const next = current.slice(0, i) + current.slice(i + 1);
                    if (!visited.has(next)) {
                         visited.add(next);
                         queue.push(next);
                    }
                }

            }

           return result.size >0 ? Array.from(result):[""];
        }
        


console.log(RemoveInvalidParentheses("()())()"));
console.log(RemoveInvalidParentheses("(a)())()"));
console.log(RemoveInvalidParentheses(")("));                                                                          //removing the minimum number of parentheses and returning all unique valid results.