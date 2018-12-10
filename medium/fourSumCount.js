/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    if(A.length == 0) return 0
    var obj = {};
    var arr = [];
    var arr1 = [];

    A.map(v1 => B.map(v2 => -v1-v2)).map(x => x.map(x1 => arr.push(x1)));
    arr.forEach(m => obj[m] ? obj[m] ++ : obj[m] = 1)

    C.map(v3 => D.map(v4 => v3 + v4)).map(x => x.map(x1 => arr1.push(x1)));
    return arr1.map(sum => obj[sum] || 0).reduce((a,b) => a + b)
};

console.log(fourSumCount([1,2],[-2,-1],[-1,2],[0,2]));