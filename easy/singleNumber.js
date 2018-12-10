/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var single;
    for (var i = 0; i < nums.length; i++) {
        console.log(single)
        single ^= nums[i];
    }
    return single;
};

console.log(singleNumber([4,1,2,1,2]))