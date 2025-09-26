/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let arr=Array.from({length:n},()=> new Array(n).fill(0));
    let rowStart=0,rowEnd=n-1;
    let colStart=0;colEnd=n-1;
let i,j,val=1;
    while(rowStart<=rowEnd && colStart<=colEnd){
        for(i=colStart;i<=colEnd;i++){
            arr[rowStart][i]=val;
            val++;
        }
        rowStart++;
        if(colStart<=colEnd){
        for(j=rowStart;j<=rowEnd;j++){
            arr[j][colEnd]=val;
            val++;
        }
        colEnd--;}
        if(rowStart<=rowEnd){

        
        for(i=colEnd;i>=colStart;i--){
            arr[rowEnd][i]=val;
            val++;
        }
        rowEnd--;}
        for(j=rowEnd;j>=rowStart;j--){
            arr[j][colStart]=val;
            val++;
        }
        colStart++;
    }
    return arr;
};