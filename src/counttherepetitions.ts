function getMaxRepetitions(s1:string,n1:number,s2:string,n2:number):number{
    if(n1 === 0 )return 0;
    let index = 0;
    let count = 0;
    const s1Len = s1.length;
    const s2Len = s2.length;

    const recall = new Map<number,[number,number]>();
    let s1count=0;
    let s2count=0;
    while(s1count<n1){
        for(let i = 0;i<s1Len;i++){
            if(s1[i]===s2[index]){
                index++;
                if(index === s2Len){
                    s2count++;
                    index=0;
                }
            }
        }
    s1count++
    
    if(recall.has(index)){
        const[prevs1count,prevs2count]=recall.get(index)!;
        const loops1=s1count-prevs1count;
        const loops2=s2count-prevs2count;
        const remaining = Math.floor((n1-s1count)/loops1);
        s1count+=remaining*loops1;
        s2count+=remaining*loops2;

    }else{
        recall.set(index,[s1count,s2count]);
    }
    }
    return Math.floor(s2count/n2);
}

console.log(getMaxRepetitions("acb",4,"ab",2));
console.log(getMaxRepetitions("acb",1,"acb",1));