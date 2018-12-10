/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    var len = nums.length,
        result = [],
        i;
    
    if (len === 0) {
        return 0;
    }
    if (len === 1) {
        return nums[0];
    }
    
    result[0] = nums[0];
    result[1] = Math.max(nums[1], nums[0]);
    for(i = 2; i < len; i++) {
        result[i] = Math.max(result[i - 2] + nums[i], result[i - 1]);
    }
    
    return result[len - 1];
};
console.log(rob([1,2,3,1]));
