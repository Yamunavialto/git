function addstrings(num1:string,num2:string):string{
    let i =num1.length-1;
    let j = num2.length-1;
    let carry = 0;
    let result = '';

    while (i>=0 || j>=0 ||carry>0) {
       const digit1=i>=0?parseInt(num1[i]):0;
       const digit2=j>=0?parseInt(num2[j]):0;
       const sum = digit1+digit2+carry;

       result = (sum%10).toString()+result;
       carry = Math.floor(sum/10);

       i--;
       j--;
    }
    return result;
}

console.log(addstrings("11","123"));
console.log(addstrings("456","77"));
console.log(addstrings("0","0"));

