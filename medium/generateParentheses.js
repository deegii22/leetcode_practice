/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var result = [];
    dfs(result, "", n, n);
    return result
};

var dfs = function(result, s, left, right){
    if(left > right) return;
    if(left == 0 && right == 0){
        result.push(s);
        return
    }
    if(left > 0){
        dfs(result, s + "(", left-1, right)
    }
    if(right > 0){
        dfs(result, s + ")", left, right-1)
    }
}

console.log(generateParenthesis(3))