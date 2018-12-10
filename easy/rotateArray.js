/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    while (k != 0){
        var remove = nums.splice(nums.length-1,1);
        nums.unshift(remove[0])
        k--;
    }
    console.log(nums)
};
console.log(rotate([1,2,3,4,5,6,7],3));
