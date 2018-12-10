/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
    nums1 = nums1.sort((a,b) => a-b);
    nums2 = nums2.sort((a,b) => a-b);
    var pnt1 = 0;
    var pnt2 = 0;
    var res = [];
    while((pnt1 < nums1.length) &&(pnt2< nums2.length)){
        if(nums1[pnt1]<nums2[pnt2]){
            pnt1++;
        }
        else{
            if(nums1[pnt1]>nums2[pnt2]){
                pnt2++;
            }
            else{
                res.push(nums1[pnt1]);
                pnt1++;
                pnt2++;
            }
        }
    }
    return res;
};
console.log(intersect([4,9,5],[9,4,9,8,4]));
