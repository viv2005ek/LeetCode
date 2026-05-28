/**
 * @param {string[]} wordsContainer
 * @param {string[]} wordsQuery
 * @return {number[]}
 */
var stringIndices = function(wordsContainer, wordsQuery) {

    class TrieNode {
        constructor() {
            this.children = new Array(26).fill(null);
            this.bestIdx = -1;
        }
    }

    const root = new TrieNode();

    // updates best candidate for node
    function updateBest(node, idx) {
        if (
            node.bestIdx === -1 ||
            wordsContainer[idx].length < wordsContainer[node.bestIdx].length ||
            (
                wordsContainer[idx].length === wordsContainer[node.bestIdx].length &&
                idx < node.bestIdx
            )
        ) {
            node.bestIdx = idx;
        }
    }

    // insert reversed word
    for (let i = 0; i < wordsContainer.length; i++) {
        let word = wordsContainer[i];
        let node = root;

        updateBest(node, i);

        for (let j = word.length - 1; j >= 0; j--) {
            let c = word.charCodeAt(j) - 97;

            if (!node.children[c]) {
                node.children[c] = new TrieNode();
            }

            node = node.children[c];

            updateBest(node, i);
        }
    }

    const ans = [];

    // process queries
    for (let q of wordsQuery) {
        let node = root;

        for (let j = q.length - 1; j >= 0; j--) {
            let c = q.charCodeAt(j) - 97;

            if (!node.children[c]) break;

            node = node.children[c];
        }

        ans.push(node.bestIdx);
    }

    return ans;
};