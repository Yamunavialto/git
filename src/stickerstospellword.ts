function minstickers(stickers:string[],target:string):number{
    const m = stickers.length;
    const stickercounts:number[][]=Array.from({length:m},()=>new Array(26).fill(0));
    for(let i =0;i<m;i++){
        for(const ch of stickers[i]){
            stickercounts[i][ch.charCodeAt(0)-97]++;
        }
    }
    const memo:Map<string,number>=new Map();
    memo.set("",0);
    function helper(remain:string):number{
        if(memo.has(remain))return memo.get(remain)!;
        const targetcount=new Array(26).fill(0);
        for (const ch of remain){
            targetcount[ch.charCodeAt(0)-97]++;
        }
        let res =Infinity;
        for(let i =0;i<m;i++){
            if(stickercounts[i][remain.charCodeAt(0)-97]===0) continue;
            const newtarget:string[]=[];
            for(let j = 0;j<26;j++){
                const diff = targetcount[j]-stickercounts[i][j];
                if(diff > 0){
                    newtarget.push(String.fromCharCode(97+j).repeat(diff));
                }
            }

            const newremain = newtarget.join('');
            const subres=helper(newremain);
            if(subres!==-1){
                res = Math.min(res,1+subres);
            }
        }

        const result = res === Infinity ? -1:res;
        memo.set(remain,result);
        return result;
    }
    return helper(target);
}

console.log(minstickers(["with","example","science"],"thehat"));
console.log(minstickers(["notice","possible"],"basicbasic"));
