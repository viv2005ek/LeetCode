/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    let s = x.toString();

    s=s.split("").reverse().join("");
    let num = parseInt(s);
    
    if(num>Math.pow(2,31))return 0;
    return x>=0? parseInt(s) : parseInt(s)*-1;
};