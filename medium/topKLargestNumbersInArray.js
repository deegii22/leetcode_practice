/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKLargest = function(nums, k) {
    return nums.sort((a,b) => b-a).splice(0,k);
};
console.log(topKLargest([5,4,3,6,8],2))