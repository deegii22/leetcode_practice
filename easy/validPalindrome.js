/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    var re = /[^A-Za-z0-9]/g;
    s = s.toLowerCase().replace(re, '')
    var len = s.length;
    for(var i=0;i<=len/2;i++){
        if(s[i]!=s[s.length-1-i]){
            return false;
        }
    }
    return true;
};

var isPalindrome = function(s) {
    var re = /[\W_]/g;
    var lower = s.toLowerCase.replace(re, '')
    var reverse = lower.split('').reverse().join('')
    return lower === reverse
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome("a."));
