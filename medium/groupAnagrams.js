/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103]
    let res = {}
    
    for (let s of strs) {
        let key = 1;
        for (let c of s) {
            key *= prime[c.charCodeAt(0) - 'a'.charCodeAt(0)];
        }
        res[key] ? res[key].push(s) : res[key] = [s];
    }
    return Object.values(res);
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));