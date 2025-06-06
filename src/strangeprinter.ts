function strangeprinter(s:string):number{
    const n =s.length;
    const dp:number[][]=Array.from({length:n},()=> Array(n).fill(Infinity));
    for(let i =0;i<n;i++){
        dp[i][i]=1;

    }
    for(let len=2;len<=n;len++){
        for(let i =0;i<=n-len;i++){
            const j=i+len-1;
            if(s[i]===s[j]){
                dp[i][j]=dp[i][j-1];

            }else{
                for(let k=i;k<j;k++){
                    dp[i][j]=Math.min(dp[i][j],dp[i][k]+dp[k+1][j]);

                }
            }
        }
    }
    return dp[0][n-1];
}

console.log(strangeprinter("aaabbb"));
console.log(strangeprinter("aba"));