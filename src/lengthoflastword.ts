function lengthOfLastWord(s: string): number {
    const words = s.trim().split(" ");
    return words[words.length - 1].length;
}

console.log(lengthOfLastWord("Hello World"));               
console.log(lengthOfLastWord("   fly me   to   the moon  ")); 
console.log(lengthOfLastWord("luffy is still joyboy"));     
