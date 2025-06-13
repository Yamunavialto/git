"use strict";
function simplifyPath(path) {
    const stack = [];
    const parts = path.split('/');
    for (const part of parts) {
        if (part === '' || part === '.') {
            continue;
        }
        else if (part === '..') {
            if (stack.length > 0) {
                stack.pop();
            }
        }
        else {
            stack.push(part);
        }
    }
    return '/' + stack.join('/');
}
console.log(simplifyPath("/home/"));
console.log(simplifyPath("/home//foo/"));
console.log(simplifyPath("/home/user/Documents/../Pictures"));
console.log(simplifyPath("/../"));
console.log(simplifyPath("/.../a/../b/c/../d/./"));
