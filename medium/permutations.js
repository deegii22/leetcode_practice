/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  var permutations = [], stack = [];

    function permuteHelper() {
        if (nums.length == 0) {
            permutations.push(stack.slice());
        }
        for (var i = 0; i < nums.length; i++) {
            var x = nums.splice(i, 1);
            stack.push(x);
            permuteHelper();
            stack.pop();
            nums.splice(i, 0, x);
        }
    }

    permuteHelper();
    return permutations;
};

console.log(permute([1,2,3]))