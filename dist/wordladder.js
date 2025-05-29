"use strict";
function ladderLength(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord))
        return 0;
    const queue = [[beginWord, 1]];
    while (queue.length > 0) {
        const [currentWord, level] = queue.shift();
        for (let i = 0; i < currentWord.length; i++) {
            for (let c = 97; c <= 122; c++) {
                const nextWord = currentWord.slice(0, i) + String.fromCharCode(c) + currentWord.slice(i + 1);
                if (nextWord === endWord) {
                    return level + 1;
                }
                if (wordSet.has(nextWord)) {
                    queue.push([nextWord, level + 1]);
                    wordSet.delete(nextWord);
                }
            }
        }
    }
    return 0;
}
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));
