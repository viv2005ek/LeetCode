/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack=[];
    const match={
        ')':'(',
           '}':'{',
              ']':'['
    }
    for(i=0;i<s.length;i++){
        const char=s[i];
        if(char=='('||char=='{'||char=='['){
            stack.push(char);
        }else{
            if(!stack.length||match[char]!=stack.pop()){
                return false;
            }
        }
    }
    return !stack.pop();
};