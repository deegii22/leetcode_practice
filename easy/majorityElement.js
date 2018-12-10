/* --------------------
     Add your code here
    --------------------- */
var majorityElement = function(nums) {
    nums = nums.sort();
    return nums[parseInt(nums.length / 2)];
};
majorityElement([2,2,1,1,1,2,2]);
    