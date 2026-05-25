class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let res = []
        let map = new Map();
        let size = nums.length;

        for (let i = 0; i < size; i++) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        }

       let sorted = [...map.entries()].sort((a, b) => b[1] - a[1]);

        return sorted.slice(0, k).map(entry => entry[0]);
    }
}
