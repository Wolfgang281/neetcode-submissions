class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set()

        for (let i = 0; i < nums.length; i++) {
            const sizeBefore = seen.size
            seen.add(nums[i])

            if (seen.size === sizeBefore) {
                return true
            }
        }

        return false
    }
}
