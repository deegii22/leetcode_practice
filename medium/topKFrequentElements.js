/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var obj = {}
    for(var i=0; i< nums.length;i++){
        if(obj[nums[i]] == undefined){
            obj[nums[i]] = 1
        } else {
            obj[nums[i]]++
        }
    }
    
    var res = []
    
    for(var item in obj){
        res.push({key: item, value: obj[item]})    
    }
    
    return res.sort((a,b) => b.value-a.value).splice(0,k).map(n=> n.key);
    
};
console.log(topKFrequent([1,1,1,2,2,3],2))