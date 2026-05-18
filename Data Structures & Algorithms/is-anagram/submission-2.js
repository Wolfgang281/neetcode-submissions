class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const map = new Map();

        for (let i = 0; i < s.length; i++) {
            map.set(s[i], (map.get(s[i]) || 0) + 1);
        }

        for (let j = 0; j < t.length; j++) {
            if (!map.has(t[j])) return false;

            if (map.get(t[j]) === 1) {
                map.delete(t[j]);
            } else {
                map.set(t[j], map.get(t[j]) - 1);
            }
        }

        return true;
    }
}
