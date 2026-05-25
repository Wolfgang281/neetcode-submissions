class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();

        // Count frequency
        for (let num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        // Create buckets
        let bucket = Array(nums.length + 1)
            .fill()
            .map(() => []);

        // Put numbers into frequency buckets
        for (let [num, freq] of map) {
            bucket[freq].push(num);
        }

        let res = [];

        // Traverse from high frequency to low
        for (let i = bucket.length - 1; i >= 0; i--) {
            for (let num of bucket[i]) {
                res.push(num);

                if (res.length === k) {
                    return res;
                }
            }
        }
    }
}