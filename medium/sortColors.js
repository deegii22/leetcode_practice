/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var first = 0
    for(var i = first;i<nums.length;i++){
        if(nums[i] == 0){
            var temp = nums[first]
            nums[first] = nums[i]
            nums[i] = temp
            first++
        }       
    }

    for(var i = first; i<nums.length;i++){
        if(nums[i] == 1){
            var temp = nums[first]
            nums[first] = nums[i]
            nums[i] = temp
            first++
        }       
    }

    return nums
};

// console.log(sortColors([1,2,0]));
console.log(sortColors([2,0,2,1,1,0]));
// console.log(sortColors([1,0,0]));
