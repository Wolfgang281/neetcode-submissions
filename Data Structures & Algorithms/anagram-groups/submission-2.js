class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

        for (let i = 0; i < strs.length; i++) {
            let sortedWord = strs[i].split("").sort().join("");

            if (map.has(sortedWord)) {
                map.get(sortedWord).push(strs[i]);
            } else {
                map.set(sortedWord, [strs[i]]);
            }
        }

        return Array.from(map.values());
    }
}
