var twoSum = function(nums, target) {
        
    for(let i = 0; i < nums.length; i++) {
        for(let k = 0; k < nums.length; k++){
            if (nums[i] + nums[k] === target && i === k){
                break;
            } else if (nums[i] + nums[k] === target ) {
                return [i, k];
            }
        }
    }
    
    
    
};