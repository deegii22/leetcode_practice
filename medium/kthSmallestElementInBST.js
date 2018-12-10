/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

// var DFS = function(result, node){
//     if(!node) return;
//     result.push(node.val);
//     DFS(result, node.left);
//     DFS(result, node.right);
//     return
// }

// var kthSmallest = function(root, k) {
//     var result = [];
//     DFS(result, root);
//     return result.sort((a,b) => a-b).splice(k-1,1);
// };

var kthSmallest = function(root, k) {
    var count = 0;
    var isFound = false;
    var res = null;
    inorder(root);
    return res;
 
    function inorder(node){
        if(node !== null && !isFound){
            inorder(node.left);
            count++;
            if(count === k){
                res = node.val;
                isFound = true;
                return;
            }
            inorder(node.right);
        }
    }
};