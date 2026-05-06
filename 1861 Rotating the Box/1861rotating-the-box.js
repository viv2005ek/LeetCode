/**
 * @param {character[][]} boxGrid
  * @return {character[][]}
   */
   var rotateTheBox = function(boxGrid) {
       let m = boxGrid.length;
           let n = boxGrid[0].length;
           
               // Step 1: simulate gravity row-wise
                   for (let i = 0; i < m; i++) {
                           let empty = n - 1;
                           
                                   for (let j = n - 1; j >= 0; j--) {
                                               if (boxGrid[i][j] === '*') {
                                                               empty = j - 1;
                                                                           } 
                                                                                       else if (boxGrid[i][j] === '#') {
                                                                                                       // move stone to the farthest possible position
                                                                                                                       [boxGrid[i][j], boxGrid[i][empty]] = [boxGrid[i][empty], boxGrid[i][j]];
                                                                                                                                       empty--;
                                                                                                                                                   }
                                                                                                                                                           }
                                                                                                                                                               }
                                                                                                                                                               
                                                                                                                                                                   // Step 2: rotate 90 degree clockwise
                                                                                                                                                                       let res = Array.from({ length: n }, () => Array(m).fill('.'));
                                                                                                                                                                       
                                                                                                                                                                           for (let i = 0; i < m; i++) {
                                                                                                                                                                                   for (let j = 0; j < n; j++) {
                                                                                                                                                                                               res[j][m - 1 - i] = boxGrid[i][j];
                                                                                                                                                                                                       }
                                                                                                                                                                                                           }
                                                                                                                                                                                                           
                                                                                                                                                                                                               return res;
                                                                                                                                                                                                               };