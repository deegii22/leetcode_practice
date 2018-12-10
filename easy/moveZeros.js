/* --------------------
     Add your code here
    --------------------- */
var moveZeroes = function(nums) {
    for(let i = nums.length-1; i>=0; i--){
        if(nums[i] == 0){
            var remove = nums.splice(i,1);
            nums.push(remove[0]);
        }
    }
};
moveZeroes([0,0,1]);
