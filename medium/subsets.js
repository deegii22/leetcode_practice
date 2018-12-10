/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    return  nums.reduce((subsets, value) => subsets.concat(subsets.map(set => [value, ...set])),[[]])   
};

console.log(subsets([1,2,3]))