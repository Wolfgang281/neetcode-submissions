class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let size = nums.length;
        let ans = new Array(size);

        let prefix = 1;

        for (let i = 0; i < size; i++) {
            ans[i] = prefix
            prefix *= nums[i];
        }

        let suffix = 1;
        for (let j = size - 1; j >= 0; j--) {
            ans[j] *= suffix;
            suffix *= nums[j];
        }

        return ans
    }
}
