/**
 * @param {number} n
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var zigZagArrays = function(n, l, r) {
    const MOD = 1000000007n;
    const m = r - l + 1;
    const size = 2 * m;

    const matMul = (A, B) => {
        const rows = A.length;
        const cols = B[0].length;
        const mid = B.length;

        const C = Array.from({ length: rows }, () =>
            Array(cols).fill(0n)
        );

        for (let i = 0; i < rows; i++) {
            for (let k = 0; k < mid; k++) {
                if (A[i][k] === 0n) continue;
                const aik = A[i][k];

                for (let j = 0; j < cols; j++) {
                    if (B[k][j] === 0n) continue;
                    C[i][j] = (C[i][j] + aik * B[k][j]) % MOD;
                }
            }
        }

        return C;
    };

    const matPow = (base, exp) => {
        let res = Array.from({ length: size }, (_, i) =>
            Array.from({ length: size }, (_, j) => (i === j ? 1n : 0n))
        );

        while (exp > 0) {
            if (exp & 1) res = matMul(res, base);
            base = matMul(base, base);
            exp >>= 1;
        }

        return res;
    };

    // Transition matrix
    const T = Array.from({ length: size }, () =>
        Array(size).fill(0n)
    );

    // U_new(x) = sum_{y<x} D(y)
    for (let x = 0; x < m; x++) {
        for (let y = 0; y < x; y++) {
            T[x][m + y] = 1n;
        }
    }

    // D_new(x) = sum_{y>x} U(y)
    for (let x = 0; x < m; x++) {
        for (let y = x + 1; y < m; y++) {
            T[m + x][y] = 1n;
        }
    }

    // Length-2 base state
    const S2 = Array.from({ length: size }, () => [0n]);

    for (let x = 0; x < m; x++) {
        S2[x][0] = BigInt(x);           // U[x] = count of smaller values
        S2[m + x][0] = BigInt(m - 1 - x); // D[x]
    }

    const P = matPow(T, n - 2);
    const Sn = matMul(P, S2);

    let ans = 0n;
    for (let i = 0; i < size; i++) {
        ans = (ans + Sn[i][0]) % MOD;
    }

    return Number(ans);
};