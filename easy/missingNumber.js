/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    for(let i=0;i<=nums.length+1;i++){
        if(!nums.includes(i)){
            return i;   
        } 
    }
};
console.log(missingNumber([0]));
