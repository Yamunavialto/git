function wordBreak(s:string,wordDict:string[]):string[]{
    const wordSet = new Set (wordDict);
    const memo = new Map<string,string[]>();
    function dfs(start : number): string[] {
        const key = s.slice(start);
        if(memo.has(key)) return memo.get(key)!;
        const res:string[] = [];
        if(start === s.length){
            res.push("");
            return res;
        }
        for(let end = start+1;end <=s.length;end++){
            const word = s.slice(start,end);
            if(wordSet.has(word)){
                const restOfSentences = dfs(end);
                for(const sentence of restOfSentences){
                    res.push(word+(sentence ? " "+ sentence:""));
                }
            }
        }
        memo.set(key,res);
        return res;
    }
    return dfs(0);
}

console.log(wordBreak("catsanddog",["cat","cats","and","sand","dog"])); 
console.log(wordBreak("pineapplepenapple",["apple","pen","applepen","pine","pineapple"])); //Note that you are allowed to reuse a dictionary word.
console.log(wordBreak("catsanddog",["cats","dog","sand","and","cat"])); 
