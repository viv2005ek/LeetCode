/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let pro =1;
    let n=nums.length;
    for(let i=0;i<n;i++){
pro *= nums[i];
    }
   
    let arr= new Array(n).fill(pro);
      for(let i=0;i<n;i++){
        if(nums[i]!=0){
           arr[i] /= nums[i]; 
        }else{
            pro=1;
             for(let j=0;j<n;j++){
                if(j==i){ continue;}
                    pro *= nums[j];
                    if(pro==0){arr[i]=0;}else{
                        arr[i]=pro;
                    
                }

    }
        }

    }
    return arr;
};