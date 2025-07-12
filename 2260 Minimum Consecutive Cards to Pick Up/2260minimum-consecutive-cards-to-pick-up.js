/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(cards) {
    let n=cards.length;
    if(n==1 || n==0)return -1;
    let ls=new Map();
    let shortest=Infinity;
    for(i=0;i<n;i++){
       if(ls.has(cards[i])){
           lastSeen=ls.get(cards[i]);
           shortest=Math.min(shortest,i-lastSeen+1);
           if(shortest==2){
               return 2;
           }
       }
        ls.set(cards[i],i);
        }
    
    
    return shortest==Infinity?-1:shortest;
};