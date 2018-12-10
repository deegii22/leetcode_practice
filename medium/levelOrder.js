/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var preOrder = function(node, level, result){
    if(!node) return;
    result[level] = Array.isArray(result[level]) ? [...result[level], node.val] : [node.val];
    preOrder(node.left, level+1, result)
    preOrder(node.right, level+1, result);
}

var levelOrder = function(root) {
    var result = []
    preOrder(root,0,result)
    return result
};