/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var res = 1;
    for(var i=0;i<Math.min(m-1,n-1);i++)
        res = res*(m+n-2-i)/(i+1); 

    return res
};

     