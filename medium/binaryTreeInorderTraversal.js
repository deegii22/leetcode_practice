/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var DFS = function(result, node){
    if(!node) return;
    DFS(result, node.left);
    result.push(node.val);
    DFS(result, node.right);
    return
}

var inorderTraversal = function(root) {
    var result = [];
    DFS(result, root);
    return result
};