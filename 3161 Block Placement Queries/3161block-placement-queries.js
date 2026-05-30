/**
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var getResults = function (queries) {
    const MX = 50000;

    const obs = [];
    for (const q of queries) {
        if (q[0] === 1) obs.push(q[1]);
    }

    const pos = [0, ...obs.sort((a, b) => a - b), MX];
    const m = pos.length;

    const idxMap = new Map();
    for (let i = 0; i < m; i++) idxMap.set(pos[i], i);

    class BIT {
        constructor(n) {
            this.n = n + 2;
            this.bit = Array(this.n).fill(0);
        }
        update(i, v) {
            for (i++; i < this.n; i += i & -i) {
                this.bit[i] = Math.max(this.bit[i], v);
            }
        }
        query(i) {
            let res = 0;
            for (i++; i > 0; i -= i & -i) {
                res = Math.max(res, this.bit[i]);
            }
            return res;
        }
    }

    const bit = new BIT(MX + 1);

    for (let i = 1; i < m; i++) {
        bit.update(pos[i], pos[i] - pos[i - 1]);
    }

    const prev = Array(m);
    const next = Array(m);
    for (let i = 0; i < m; i++) {
        prev[i] = i - 1;
        next[i] = i + 1;
    }

    const parent = Array.from({ length: m }, (_, i) => i);

    const find = (x) => {
        if (parent[x] === x) return x;
        return parent[x] = find(parent[x]);
    };

    const remove = (i) => {
        parent[i] = find(i - 1);
    };

    const upperBound = (arr, x) => {
        let l = 0, r = arr.length;
        while (l < r) {
            const mid = (l + r) >> 1;
            if (arr[mid] <= x) l = mid + 1;
            else r = mid;
        }
        return l;
    };

    const ans = [];

    for (let k = queries.length - 1; k >= 0; k--) {
        const q = queries[k];

        if (q[0] === 2) {
            const [_, x, sz] = q;

            const r = upperBound(pos, x) - 1;
            const pIdx = find(r);
            const pred = pos[pIdx];

            const best = Math.max(bit.query(x), x - pred);
            ans.push(best >= sz);
        } else {
            const x = q[1];
            const i = idxMap.get(x);

            const l = prev[i];
            const r = next[i];

            bit.update(pos[r], pos[r] - pos[l]);

            next[l] = r;
            prev[r] = l;

            remove(i);
        }
    }

    return ans.reverse();
};