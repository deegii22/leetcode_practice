/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
 var reverseBits = function(n) {
    var bin = n.toString(2)
    if (bin.length != 32){
        var diff = 32 - bin.length
        var res = '';
        for(var i=0;i<diff;i++){
            res += '0'
        } 
        bin = res + bin
    }
    return parseInt(bin.split('').reverse().join(''),2)
};
console.log(reverseBits(43261596));
