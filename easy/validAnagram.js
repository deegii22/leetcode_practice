/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var s1 = s.split("").sort();
    var s2 = t.split("").sort();
    if(s1.length !== s2.length){
        return false
    }
    for(let i=0;i< s1.length;i++){
        if(s1[i] !== s2[i]){
            return false
        } 
    }
    return true;
    
};
maxProfit([7,1,5,3,6,4]);
