var maxProfit = function(prices) {
    var lowest = Number.MAX_VALUE;
    var diff = 0;
    for (let price of prices) {
        lowest = Math.min(lowest, price)
        diff = Math.max(diff, price - lowest)
    }
    return diff;
};
console.log(maxProfit([7,1,5,3,6,4]));
