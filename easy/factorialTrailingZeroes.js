/**
 * @param {number} n
 * @return {number}
 */
 var trailingZeroes = function(n) {
    if (n === 0) return 0;
    var res = 0;
    while (n !== 0) {
        n = parseInt(n / 5);
        res += n;
    }
    return res;
};
console.log(trailingZeroes(30));
