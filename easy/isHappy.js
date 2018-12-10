/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    var num = 0;
    var sum = 0;
    for(let i of n.toString()){
        num += Number(i)*Number(i)
    }
    console.log(num)
    for(let i of num.toString()){
        sum += Number(i)
    }
    return sum === 1 ? true : isHappy(sum)
};
console.log(isHappy(3));
