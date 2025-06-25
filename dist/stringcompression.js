"use strict";
function compress(chars) {
    let write = 0;
    let read = 0;
    while (read < chars.length) {
        const currentChar = chars[read];
        let count = 0;
        while (read < chars.length && chars[read] === currentChar) {
            read++;
            count++;
        }
        chars[write] = currentChar;
        write++;
        if (count > 1) {
            const countStr = count.toString();
            for (let digit of countStr) {
                chars[write] = digit;
                write++;
            }
        }
    }
    return write;
}
//example 1 
let chars = ["a", "a", "b", "b", "c", "c", "c"];
let compressedLength = compress(chars);
console.log("returned Length:", compressedLength);
console.log("compressed Array:", chars.slice(0, compressedLength));
//example 2
let chars2 = ["a"];
let compressedLength2 = compress(chars2);
console.log("returned Length:", compressedLength2);
console.log("compressed Array:", chars2.slice(0, compressedLength2));
//example 3 
let chars3 = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"];
let compressedLength3 = compress(chars3);
console.log("returned Length:", compressedLength3);
console.log("compressed Array:", chars3.slice(0, compressedLength3));
