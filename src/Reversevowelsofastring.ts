function reversevowels(s:string):string{
    const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
    const chars = s.split('');
    let left = 0;
    let right = chars.length-1;

    while(left<right){
        while(left<right&&!vowels.has(chars[left])){
            left++;

        }
        while(left<right&&!vowels.has(chars[right])){
            right--;
        }
        [chars[left],chars[right]]=[chars[right],chars[left]];
        left++;
        right--;
    }
    return chars.join('');
}
console.log(reversevowels("IceCream"));
console.log(reversevowels("Leetcode"));
