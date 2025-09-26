/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
let dp= new Array(ratings.length).fill(1);
    for(let i =1;i<ratings.length;i++){
if(ratings[i]>ratings[i-1]){
     dp[i] = dp[i - 1] + 1;
}
    }

     for(let i =ratings.length -1;i>=0;i--){
if(ratings[i]>ratings[i+1]){
     dp[i] =Math.max(dp[i], dp[i + 1] + 1);
}
    }
return dp.reduce((a,b)=>a+b,0);
};