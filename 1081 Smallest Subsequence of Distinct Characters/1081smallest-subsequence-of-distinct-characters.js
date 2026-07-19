/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function(s) {
    const lastIndex = new Map();

    for (let i = 0; i < s.length; i++) {
        lastIndex.set(s[i], i);
    }

    const stack = [];
    const visited = new Set();

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];

        if (visited.has(ch)) continue;

        while (
            stack.length &&
            stack[stack.length - 1] > ch &&
            lastIndex.get(stack[stack.length - 1]) > i
        ) {
            visited.delete(stack.pop());
        }

        stack.push(ch);
        visited.add(ch);
    }

    return stack.join("");
};