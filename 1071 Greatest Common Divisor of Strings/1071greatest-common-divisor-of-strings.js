/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if(str1.length ==0 || str2.length==0) return "";
    if(str1+str2!==str2+str1) return "";
    let a=str1.length;
    let b=str2.length; //    gcd(a,b)=gcd(b,a%b);
while(b!=0){
    let temp=b;
    b=a%b;
a=temp;
}
return str1.slice(0,a);
};