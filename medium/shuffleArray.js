/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    function shuffle(a) {
        var length = a.length;
        var shuffled = Array(length);

        for (var i = 0, rand; i < length; i++) {
          rand = ~~(Math.random() * (i + 1));
          if (rand !== i) shuffled[i] = shuffled[rand];
          shuffled[rand] = a[i];
        }

        return shuffled;
  }

  return shuffle(this.nums);
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

var obj = new Solution([1,2,3]) 
var param_1 = obj.reset()
var param_2 = obj.shuffle()
console.log(param_2)
