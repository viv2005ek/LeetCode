/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    n = height.length;
    let largest = 0;
    i=0;
    right=n-i;
    while(i<right) {
        min=0;
        if(height[i]<height[right]){
            min=height[i];
        }else{
            min=height[right];
        }
       if(largest<(right-i)*(min)){
        largest=(right-i)*(min);
       }
        if(height[i]<height[right]){
            i++;
        }else{
           right--;
        }
    }
    return largest;
};