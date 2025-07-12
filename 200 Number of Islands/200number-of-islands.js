/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    m = grid.length;
    if (m == 0) { return 0 };
    n = grid[0].length;
    if (n == 0) { return o };
    let res=0;
let sink=(i,j)=>{
if(j>=n||i>=m||j<0||i<0||grid[i][j]==0) return;
grid[i][j]=0;
sink(i+1,j);
sink(i,j+1);
sink(i-1,j);
sink(i,j-1);
}
for(i=0;i<m;i++){
    for(j=0;j<n;j++){
        if(grid[i][j]!=0){
            res+=1;
            sink(i,j);
        }
    }
}
return res;
};