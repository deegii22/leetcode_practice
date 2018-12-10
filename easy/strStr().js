/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    var s1 = haystack.length, s2 = needle.length;
    
    if(s2 === 0) return 0;
    
    for(var i=0;i<s1;i++){
        if(haystack.substr(i,s2) === needle) return i
    }
    return -1
};
console.log(strStr('hello','ll'));
