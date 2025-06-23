function isValid(code:string):boolean {
    const n = code.length;
    const stack:string[]=[];
    let i =0;
    while (i<n){
        if(code.startsWith("<![CDATA[",i)){
            if(stack.length === 0 ) return false;
            const j=code.indexOf("]]>",i);
            if(j<0)return false;
            i =j+3;
        
        } else if(code.startsWith("</",i)){
            const j=code.indexOf(">",i);
            if(j<0) return false;

            const tagName = code.substring(i+2,j);
            if(!isValidTagName(tagName)) return false;
            if(stack.length === 0 || stack.pop()!== tagName) return false;
             i=j+1;
             if(stack.length === 0 && i<n) return false;
        } else if(code.startsWith("<",i)){
            const j = code.indexOf(">",i);
            if(j<0) return false;
            const tagName = code.substring(i+1,j);
            if(!isValidTagName(tagName)) return false;
            stack.push(tagName);
            i=j+1;
        } else {
        if(stack.length ===0) return false;
        i++;
        }
    }
     return stack.length === 0;
}

function isValidTagName(tag:string):boolean{
    return /^[A-Z]{1,9}$/.test(tag);
}

console.log(isValid("<DIV>This is the first line <![CDATA[<div>]]></DIV>"))
console.log(isValid("<DIV>>>  ![cdata[]] <![CDATA[<div>]>]]>]]>>]</DIV>"))
console.log(isValid("<A>  <B> </A>   </B>"))