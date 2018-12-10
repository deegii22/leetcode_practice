/**
 * @param {string} s
 * @return {number}
 */
 var titleToNumber = function(s) {
    var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', sum = 0, i;
    for (i = 0; i < s.length; i++) {
        sum += Math.pow(letters.length, i) * (letters.indexOf(s.substr(((i + 1) * -1), 1)) + 1);
    }
    console.log(sum);
    return sum;
};
titleToNumber("AA");
