/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {

let solve=(i,j,w_i)=>{
        if (w_i === word.length) return true;

    if(i<0||i>=board.length||j<0||j>=board[0].length||board[i][j]=='*'||word[w_i]!=board[i][j]) return false;

    let ch=board[i][j];
    board[i][j]='*';
   let res=solve(i+1,j,w_i+1)||solve(i-1,j,w_i+1)||solve(i,j+1,w_i+1)||solve(i,j-1,w_i+1);
 board[i][j]=ch;
 return res
}

    for(i=0;i<board.length;i++){
        for(j=0;j<board[0].length;j++){
if( board[i][j]==word[0] && solve(i,j,0) ){
   return true;
}
        }
    }
    return false;
};