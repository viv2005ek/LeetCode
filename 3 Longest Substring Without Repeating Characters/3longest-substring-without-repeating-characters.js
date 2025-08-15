/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let n=s.length;
    if(n==0)return 0;
    let left=0;
    let max=1;
    let seen= new Set();
    for(let i=0;i<n;i++){
        while(seen.has(s[i])){
        seen.delete(s[left]);
        left++;
        }
        seen.add(s[i]);
        max=Math.max(max,i-left+1);
    }
    return max;
};