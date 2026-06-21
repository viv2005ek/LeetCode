/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    costs=costs.sort((a,b)=>a-b);
    let i =0;
    while(coins>=costs[i]){
coins-=costs[i];
i++;
    }
    return i;
};