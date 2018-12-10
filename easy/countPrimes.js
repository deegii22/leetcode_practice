/**
 * @param {number} n
 * @return {number}
 */

var countPrimes = function(n) {
    if (n <= 2){
        return 0;
    }

    var notPrime = [];
    var count = 1;

    for (var i = 3; i < n; i+=2){
        if (!notPrime[i]) {
            count++;
            for (var j = 3; i*j < n; j+=2){
                notPrime[i*j] = true;
            }
        }
    }
    return count;
    
};
countPrimes(10);
