function addoperators(num:string,target:number):string[]{
    const result:string[]=[];
    function backtrack(index:number,path:string,evaluated:number,prevoperand:number):void{
        if(index ===num.length){
            if(evaluated === target){
                result.push(path);
            }
            return;
        }
        for(let i = index;i<num.length;i++){
            if(i!==index && num[index]==='0')break;
            const currentstr = num.substring(index,i+1);
            const currentnum = parseInt(currentstr);
            if(index ===0){
                backtrack(i+1,currentstr,currentnum,currentnum);
            }else{
                backtrack(i+1,path+ '+'+ currentstr,evaluated+currentnum,currentnum);
                backtrack(i+1,path+'-'+currentstr,evaluated-currentnum,-currentnum);
                backtrack(i+1,path+'*'+currentstr,evaluated- prevoperand+prevoperand * currentnum,prevoperand * currentnum);

            }
        }
    }
    backtrack(0,'',0,0);
    return result;
}

console.log(addoperators("123",6));
console.log(addoperators("232",8));
console.log(addoperators("3456237490",9191));
