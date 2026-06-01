class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const ans = new Array(n).fill(1);
        
        let left = 1;
        let right = 1;
        
        for (let i = 0; i < n; i++) {
            ans[i] *= left;           
            left *= nums[i];
            
            ans[n - 1 - i] *= right;  
            right *= nums[n - 1 - i];
        }
        
        return ans;
    }
}
