/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    var obj = {};
    for(var i=0;i<nums.length;i++){
        console.log(obj[nums[i]] + "-" + nums[i])
        if(obj[nums[i]] == undefined){
            obj[nums[i]] = 1;
        } else {
            nums.splice(i,1)
            i--;
        }
    }
    console.log(nums)
};
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
