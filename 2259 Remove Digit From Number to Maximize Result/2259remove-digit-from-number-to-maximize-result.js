/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {
    n=number.length;
    if(n==0)return null;
    let results=[];
    let dummy;
    for(i=0;i<n;i++){
        if(number[i]==digit){
          dummy=number.slice(0,i)+number.slice(i+1,n);
            results.push(dummy);
        }
    }
results.sort((a, b) => b.localeCompare(a));
return results[0];};