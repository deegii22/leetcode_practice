/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    var obj  = {}
    nums.map(m => obj[m] ? obj[m]++ : obj[m] = 1)
    for(var item in obj){
        if(obj[item] > 1){
            return item
        }
    }
};

console.log(findDuplicate([1,3,4,2,2]))