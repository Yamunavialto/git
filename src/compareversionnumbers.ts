function compareVersion(version1:string,version2:string): number{
    const v1 = version1.split('.').map(Number);
    const v2=version2.split('.').map(Number);
    const maxlength=Math.max(v1.length,v2.length);
    for(let i =0;i<maxlength;i++){
        const num1=i<v1.length?v1[i]:0;
        const num2=i<v2.length?v2[i]:0;
        if(num1>num2)return 1;
        if(num1<num2)return -1;
    }
    return 0;

}

console.log(compareVersion("1.2","1.10"));
console.log(compareVersion("1.01","1.001"));
console.log(compareVersion("1.0","1.0.0.0"));