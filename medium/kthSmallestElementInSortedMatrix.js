/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    var arr = []
    matrix.map(i => i.map(j => arr.push(j)));
    return arr.sort((a,b) => a-b).splice(k-1,1)
};

console.log(kthSmallest([[ 1,  5,  9],[10, 11, 13],[12, 13, 15]],8))