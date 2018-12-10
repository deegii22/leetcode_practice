/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
    var num = n.toString(2)
    var count = 0;
    for(var item of num){
        if(item == "1"){
            count++
        }
    }
    return count
};
console.log(hammingWeight(128))
