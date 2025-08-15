/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    n=s.length;
    if(n==0)return "";
    if(n==1)return s;
    let dp = Array.from({length:n},()=>Array(n).fill(false));
    max=0;
    start=0;
    for(i=0;i<n;i++){
        dp[i][i]=true;
        max=1;
        start=i;

    }
     for(i=0;i<n-1;i++){
        if(s[i]==s[i+1]){
             dp[i][i+1]=true;
        max=2;
        start=i;  
        }
     }
     for(len=3;len<=n;len++){
        for(i=0;i<=n-len;i++){
if(s[i]==s[i+len-1]&&dp[i+1][i+len-2]){
    dp[i][i+len-1]=true;
    start=i;
    max=len;
}
        }
     }

    return s.slice(start,start+max)

};