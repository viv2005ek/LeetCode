/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    n=temperatures.length;
    if(n==1){return [0]};
    if(n==0){return null};
    let stack=[];
    let result=new Array(n).fill(0);
   for(i=n-1;i>=0;i--){
while(stack.length&& temperatures[i]>=temperatures[stack[stack.length-1]]){
    stack.pop();
}
if(stack.length){
result[i]=stack[stack.length-1]-i;
stack.push(i);
}
if(!stack.length){
    stack.push(i);
}
   }
   return result;
};