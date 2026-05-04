/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    let rows = Array.from({ length: 9 }, () => Array(10).fill(false));
    let cols = Array.from({ length: 9 }, () => Array(10).fill(false));
    let boxes = Array.from({ length: 9 }, () => Array(10).fill(false));

    // initialize constraints
    for (let r = 0; r <9; r++) {
        for (let c = 0; c < 9; c++) {
            let val = board[r][c];
            if (val !== '.') {
                let num = parseInt(val);
                let box = Math.floor(r / 3) * 3 + Math.floor(c / 3);
                rows[r][num] = true;
                cols[c][num] = true;
                boxes[box][num] = true;
            }
        }
    }

    function backtrack() {
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === '.') {
                    let box = Math.floor(r / 3) * 3 + Math.floor(c / 3);

                    for (let num = 1; num <= 9; num++) {
                        if (!rows[r][num] && !cols[c][num] && !boxes[box][num]) {

                            // place
                            board[r][c] = num.toString();
                            rows[r][num] = cols[c][num] = boxes[box][num] = true;

                            if (backtrack()) return true;

                            // undo (backtrack)
                            board[r][c] = '.';
                            rows[r][num] = cols[c][num] = boxes[box][num] = false;
                        }
                    }

                    return false; // no valid number here
                }
            }
        }

        return true; // solved
    }

    backtrack();
};