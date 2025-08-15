/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(s.length<t.length)return "";
    let required = new Map();
    for(let char of t){
        required.set(char,((required.get(char)||0)+1));

    }
    let requiredCount=required.size;
    let haveMap = new Map();
    let hadCount=0;
    
    let res=[-1,-1];
    let minLength= Infinity;
left=0;
    for(i=0;i<s.length;i++){
                haveMap.set(s[i],((haveMap.get(s[i])||0)+1));
if(required.has(s[i]) && required.get(s[i])==haveMap.get(s[i])){
    hadCount++;
}
while(hadCount==requiredCount){
    if (i-left+1<minLength){
        minLength=i-left+1;
        res=[left,i];
    }
   
     haveMap.set(s[left],haveMap.get(s[left])-1);
  if (required.has(s[left]) && haveMap.get(s[left]) < required.get(s[left])) {
    hadCount--;
}
     left++;
}
    }
     return res[0] === -1 ? "" : s.slice(res[0], res[1] + 1);
};