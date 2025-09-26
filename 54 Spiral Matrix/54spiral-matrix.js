/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let m= matrix.length;
    if(m==0) return [] ;
    let n=matrix[0].length;
    let arr=[];
    let colBegin=0,colEnd=n-1,rowBegin=0,rowEnd=m-1;
    while(colBegin<=colEnd && rowBegin<=rowEnd){
        for(let i=colBegin;i<=colEnd;i++){
            arr.push(matrix[rowBegin][i]);
        }
        rowBegin++;
    
         for(let j=rowBegin;j<=rowEnd;j++){
            arr.push(matrix[j][colEnd]);
        }
        colEnd--;
        if(rowBegin<=rowEnd){
        for(let i=colEnd;i>=colBegin;i--){
            arr.push(matrix[rowEnd][i]);
        }
        rowEnd--;}
        if(colBegin<=colEnd){
          for(let j=rowEnd;j>=rowBegin;j--){
            arr.push(matrix[j][colBegin]);
        }
        colBegin++;}
    }
    return arr;
};