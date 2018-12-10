/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    var middle = findMiddle(head);   
    var rNode = reverseNode(middle); 

    while(rNode != null){
        if(head.val != rNode.val) {
            return false;
        }
        head = head.next;
        rNode = rNode.next;
    }
    return true;


    function findMiddle(node){
        var fast = node;
        var slow = node;

        while(fast != null && fast.next != null){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    function reverseNode(node){
        if(node==null || node.next==null) return node;  
        var prev = null;
        var cur  = node;
        while(cur != null){
            var temp = cur;
            cur = cur.next;   
            temp.next = prev;
            prev = temp;
        }
        return prev;
    }
};
