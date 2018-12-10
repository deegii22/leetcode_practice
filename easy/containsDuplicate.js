/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
        var dic = {};
        nums.forEach(function (item) {
            if(dic[item] == undefined){
                dic[item] = 1;
            } else {
                dic[item] += 1;
            }   
        })
        console.log(dic)
        for(let key in dic){
            if(dic[key] >= 2){
                return true
            } 
        }
        return false;
};
containsDuplicate([0]);
