/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
     var num = 1;
     while(num < n){
         num *= 3
     }
     return num == n;
};
console.log(isPowerOfThree(0));
